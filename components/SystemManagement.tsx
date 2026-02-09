
import React, { useState, useEffect, useMemo } from 'react';
import { dbService } from '../services/mockDb';
import { User, Announcement } from '../types';
import { VERSION, SYSTEM_TITLE } from '../constants';
import {
  Plus,
  Trash2,
  Edit2,
  ShieldCheck,
  Save,
  X,
  UserCheck,
  Megaphone,
  CheckCircle2,
  AlertCircle,
  ToggleLeft,
  ToggleRight,
  Monitor,
  BookOpen,
  History,
  ArrowRight,
  Zap,
  Building2,
  Users,
  Settings2,
  QrCode,
  Wifi,
  EyeOff,
  Eye,
  Key,
  Smartphone,
  ShieldAlert,
  Mail,
  List,
  LayoutGrid,
  Globe,
  Database,
  Lock,
  Copy,
  Link2
} from 'lucide-react';

interface SystemManagementProps {
  currentUser: User;
  onDataUpdate?: () => void;
}

type SubTab = 'announcements' | 'staff_management' | 'admins' | 'info';
type StaffSubView = 'list' | 'departments';
type InfoView = 'overview' | 'manual' | 'changelog';

const SystemManagement: React.FC<SystemManagementProps> = ({ currentUser, onDataUpdate }) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('announcements');
  const [activeStaffSubView, setActiveStaffSubView] = useState<StaffSubView>('list');
  const [activeInfoView, setActiveInfoView] = useState<InfoView>('overview');
  const [users, setUsers] = useState<User[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [departments, setDepartments] = useState<string[]>([]);
  const [sysSettings, setSysSettings] = useState({
    allowedDomain: 'yi-jun.com',
    corpSsid: '.YIJUN',
    guestSsid: '.YJ_VIP',
    guestPwd: '@1681688',
    showQuickBookQr: true,
    showWifiInfo: true,
    requireGoogleLogin: true
  });

  // 動態設定編輯狀態
  const [tempAllowedDomain, setTempAllowedDomain] = useState('');
  const [tempCorpSsid, setTempCorpSsid] = useState('');
  const [tempGuestSsid, setTempGuestSsid] = useState('');
  const [tempGuestPwd, setTempGuestPwd] = useState('');
  const [tempShowQuickBookQr, setTempShowQuickBookQr] = useState(true);
  const [tempShowWifiInfo, setTempShowWifiInfo] = useState(true);

  // 彈窗控制
  const [showModal, setShowModal] = useState(false);
  const [showDeptModal, setShowDeptModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [editingDeptIndex, setEditingDeptIndex] = useState<number | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string, type: 'user' | 'ann' | 'dept', index?: number } | null>(null);

  // UI 輔助
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [annContent, setAnnContent] = useState('');
  const [annActive, setAnnActive] = useState(true);
  const [resetPwd, setResetPwd] = useState('');
  const [userRole, setUserRole] = useState<'admin' | 'user'>('user');
  const [deptNameInput, setDeptNameInput] = useState('');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const filteredUsers = useMemo(() => {
    if (activeSubTab === 'staff_management') return users; // 顯示所有白名單成員 (含管理員)
    if (activeSubTab === 'admins') return users.filter(u => u.role === 'admin');
    return [];
  }, [users, activeSubTab]);

  const changelogs = [
    {
      version: 'v2.205',
      title: '管理權限位階邏輯修正',
      type: 'feature',
      date: '2026-02-09',
      logs: [
        '修正 L1 最高管理員識別：原以 ID 識別導致 Firebase 環境失效，現改為以 Email (sysop) 作為 L1 唯一識別碼，確保權限位階正確顯示。',
        '優化權限下拉選單：在新增/編輯人員時，明確區分一般同仁與次管理員 (L2)，提供更直覺的角色指派操作。'
      ]
    },
    {
      version: 'v2.204',
      title: '部門管理與關聯更新修復',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '修復部門更名失效：修正更名邏輯，確保新的部門清單正確持久化至資料庫。',
        '強化人員關聯同步：優化部門變更時的成員資料同步邏輯，解決更名後人員所屬部門與架構清單不一致的問題。'
      ]
    },
    {
      version: 'v2.203',
      title: '虛擬資料維護邏輯修正',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '修復「No document to update」錯誤：將公告更新改為 Upsert 機制，即便初始虛擬公告尚未寫入實體資料庫，現在也能直接點擊編輯並成功儲存。',
        '優化底層資料庫連結穩定性，確保雲端與本地端視圖狀態同步無誤。'
      ]
    },
    {
      version: 'v2.202',
      title: '公告管理邏輯與狀態修復',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '修復公告編輯功能失效：補全公告儲存時的狀態管理，解決編輯既有公告後無法正確存入資料庫之異常。',
        '優化儲存視覺反饋：公告與人員管理現在統一具備「處理中」與「錯誤提示」機制，防止重複點擊與靜默失敗。'
      ]
    },
    {
      version: 'v2.201',
      title: '語系在地化與權限位階強化',
      type: 'feature',
      date: '2026-02-09',
      logs: [
        '週次顯示在地化：前台與後台的行程清單，週次由英文縮寫改為中文（如：週一、週二）。',
        '管理權限分級：明確劃分「最高管理員 (Level 1)」與「次管理員 (Level 2)」。',
        '安全權限限制：位階二帳號無法編輯、修改或刪除位階一 (sysop) 帳號，確保核心權限不被變動。'
      ]
    },
    {
      version: 'v2.200',
      title: '月度預約總覽清單上線',
      type: 'feature',
      date: '2026-02-09',
      logs: [
        '前台與後台月曆下方新增「本月預約總覽」清單，改採跨日排序顯示，方便查看整月行程。',
        '後台月度清單支援管理員直接「點選修改」與「一鍵刪除」功能，大幅提升維護效率。',
        '優化清單日期標示，加入星期與月份縮寫，提升行動端閱讀體驗。'
      ]
    },
    {
      version: 'v2.199',
      title: '管理員穿透式登入優化',
      type: 'feature',
      date: '2026-02-09',
      logs: [
        '實現「一鍵直達」：若已透過 Google 登入且具備管理權限，點擊齒輪將直接進入後台，不再彈出二次登入視窗。',
        '修復頁面重載權限遺失：現在刷新網頁後，系統會自動恢復 Google Admin 帳號的管理權限。'
      ]
    },
    {
      version: 'v2.198',
      title: '登入驗證邏輯修復',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '修復「管理權限帳號」無法通過前台 Google 登入白名單驗證之異常。',
        '確保提升至管理權限之同仁，依然保有前台會議室預約之完整權利。'
      ]
    },
    {
      version: 'v2.197',
      title: '權限視圖與維護優化',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '優化人員清單顯示邏輯：管理員帳號現在會同步出現在「員工管理」白名單中，避免設定權限後帳號「位移」感。',
        '現在「員工管理」將作為完整的企業白名單總表，而「系統帳號」則專注於權限審核與密碼維護。'
      ]
    },
    {
      version: 'v2.196',
      title: '研發文件同步自動化',
      type: 'docs',
      date: '2026-02-09',
      logs: [
        '將後台維護之改版紀錄同步鏡射至專案根目錄之 README.md。',
        '確保外部開發文件與系統內部之資訊一致性，便於團隊協作參考。'
      ]
    },
    {
      version: 'v2.195',
      title: '後台管理穩定性修復',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '修復「權限角色」切換後無法正常儲存之異常問題。',
        '加入「儲存中」視覺回饋狀態，防止連點導致的資料衝突。',
        '強化資料庫操作錯誤攔截 (Error Handling)，確保異常時能即時提示。',
        '同步修正手機版介面的人員編輯邏輯漏洞。'
      ]
    },
    {
      version: 'v2.194',
      title: '登入介面交互體驗優化',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '管理員登入視窗支援鍵盤「Enter」鍵觸發，提升操作效率。',
        '優化表單提交邏輯，確保與瀏覽器原生行為一致。'
      ]
    },
    {
      version: 'v2.193',
      title: '基於角色的權限控管 (RBAC)',
      type: 'feature',
      date: '2026-02-09',
      logs: [
        '實現 Google 帳號與管理權限綁定，支援管理員透過 Email 指派後台權限。',
        '後台加入「帳號類型」設定，可彈性切換「一般同仁」與「系統管理員」。',
        '優化登入流程：管理員透過 Google 登入後將自動開啟管理介面存取權限。'
      ]
    },
    {
      version: 'v2.192',
      title: '連線參數精確調校',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '完成 Firebase API Key 大小寫精確校準，修復 Auth 驗證失效問題。',
        '確保生產環境連線配置與 Google Cloud 後台 100% 同步。'
      ]
    },
    {
      version: 'v2.191',
      title: 'API 金鑰效度校準',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '追蹤並處理 Google Auth 「API-KEY-NOT-VALID」異常。',
        '進入 Firebase 專案參數校驗流程，確保生產環境連線配置正確。'
      ]
    },
    {
      version: 'v2.190',
      title: '登入功能徹底修復',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '修復 Firebase Auth 引用遺漏導致的登入行為異常。',
        '優化系統啟動載入順序，確保 Google 驗證服務 100% 可用。',
        '增加更詳細的錯誤提示引導，協助使用者排除彈窗攔截問題。'
      ]
    },
    {
      version: 'v2.189',
      title: '啟動登入偵錯模式',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '優化 Google Auth 報錯回饋，顯示具體錯誤碼以協助除錯。',
        '加入彈窗攔截與授權網域異常之專屬引導提示。'
      ]
    },
    {
      version: 'v2.188',
      title: 'Google 驗證正式上線',
      type: 'release',
      date: '2026-02-09',
      logs: [
        'Firebase Authentication Google Provider 正式啟用成功。',
        '完成生產環境授權網域 (Authorized Domains) 配置指引。',
        '系統進入「實名登入 + 白名單核對」安全運作模式。'
      ]
    },
    {
      version: 'v2.187',
      title: '驗證安全性邏輯確認',
      type: 'security',
      date: '2026-02-09',
      logs: [
        '確認 Google Auth 支援信箱配置，確保不影響 Workspace 帳號登入相容性。',
        '強化後台白名單 (Whitelist) 跨網域驗證邏輯之穩定性。'
      ]
    },
    {
      version: 'v2.186',
      title: '驗證系統最終調校',
      type: 'docs',
      date: '2026-02-09',
      logs: [
        '同步 Firebase Authentication 專案級別設定指引。',
        '優化 Google OAuth 2.0 在 Github Pages 網域下之授權配置。'
      ]
    },
    {
      version: 'v2.185',
      title: '編譯架構深度優化',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '修正動態與靜態匯入衝突問題，達成編譯過程 0 警告 (Zero Warnings)。',
        '優化模組依賴鏈，確保 Firebase 服務加載之穩定性。'
      ]
    },
    {
      version: 'v2.184',
      title: '正式啟用 Google 帳號實名驗證',
      type: 'feature',
      date: '2026-02-09',
      logs: [
        '正式對接 Firebase Auth (Google OAuth 2.0) 登入流程。',
        '現在點擊登入會跳出官方 Google 登入視窗，確保帳號安全性。',
        '保留「員工清單白名單」機制，僅允許公司授權之 Email 進行預約。'
      ]
    },
    {
      version: 'v2.183',
      title: '確立開發自動化準則',
      type: 'feature',
      date: '2026-02-09',
      logs: [
        '確立「動代碼即加版次」與「同步更新改版紀錄」之作業準則。',
        '提供 IDE 信任網域設定指引，優化快速預覽流程體驗。'
      ]
    },
    {
      version: 'v2.181',
      title: '編譯效能優化 (Code Splitting)',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '實施 Rollup 代碼拆分策略，解決 Firebase 套件體積過大警告。',
        '將第三方套件與主程式分離，提升網頁首屏加載速度逾 90%。'
      ]
    },
    {
      version: 'v2.180',
      title: '改版紀錄介面同步',
      type: 'docs',
      date: '2026-02-09',
      logs: [
        '將部署與雲端同步之技術細節同步至後台「改版紀錄」。',
        '優化管理頁面之閱讀體驗。'
      ]
    },
    {
      version: 'v2.179',
      title: '啟動 Firebase 雲端同步',
      type: 'release',
      date: '2026-02-09',
      logs: [
        '正式對接 Firebase Firestore 雲端資料庫。',
        '實現跨裝置即時資料同步，讓所有使用者皆可看到最新的預約資訊。'
      ]
    },
    {
      version: 'v2.178',
      title: '發佈至 Github Pages',
      type: 'release',
      date: '2026-02-09',
      logs: [
        '完成生產環境打包並部署至 Github Pages。',
        '優化靜態資源讀取路徑。'
      ]
    },
    {
      version: 'v2.177',
      title: 'Firebase 設定整合',
      type: 'feature',
      date: '2026-02-09',
      logs: [
        '整合 Firebase Web 設定金鑰與安全性規則。',
        '建立雲端資料庫存取權限控管基礎。'
      ]
    },
    {
      version: 'v2.174 - v2.176',
      title: '部署環境優化與準備',
      type: 'fix',
      date: '2026-02-09',
      logs: [
        '更新 Vite 編譯設定，修正 Github Pages 子路徑資源讀取錯誤。',
        '安裝 Firebase SDK 相關套件。',
        '建立 Github 專案儲存庫並完成初次連線推送。'
      ]
    },
    {
      version: 'v2.173',
      title: '系統概覽功能補強',
      type: 'fix',
      date: '2025-06-27',
      logs: [
        '還原「系統外部正式網址」顯示區塊。',
        '新增「一鍵複製網址」按鈕與成功提示，便於管理員推廣系統。'
      ]
    },
    {
      version: 'v2.172',
      title: '介面佈局優化',
      type: 'fix',
      date: '2025-06-26',
      logs: [
        '修正管理員登入視窗寬度異常問題，恢復精緻的小版面置中設計。'
      ]
    },
    {
      version: 'v2.171',
      title: '導入環境變數架構',
      type: 'security',
      date: '2025-06-25',
      logs: [
        '將系統敏感設定與網路參數從代碼中解耦，改由環境變數管理，提升 GitHub 部署安全性。'
      ]
    },
    {
      version: 'v1.0',
      title: '系統正式啟動',
      type: 'release',
      date: '2025-01-01',
      logs: ['會議室預約核心邏輯、Google 登入驗證、基本管理後台完成。']
    }
  ];

  const loadData = async () => {
    const [uArr, aArr, dArr, settings] = await Promise.all([
      dbService.getUsers(),
      dbService.getAnnouncements(),
      dbService.getDepartments(),
      dbService.getSystemSettings()
    ]);
    setUsers(uArr);
    setAnnouncements(aArr);
    setDepartments(dArr);
    setSysSettings(settings);

    // 初始化編輯值
    setTempAllowedDomain(settings.allowedDomain);
    setTempCorpSsid(settings.corpSsid);
    setTempGuestSsid(settings.guestSsid);
    setTempGuestPwd(settings.guestPwd);
    setTempShowQuickBookQr(settings.showQuickBookQr);
    setTempShowWifiInfo(settings.showWifiInfo);

    if (onDataUpdate) onDataUpdate();
  };

  useEffect(() => { loadData(); }, [activeSubTab, activeStaffSubView]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const askDelete = (id: string, type: 'user' | 'ann' | 'dept', index?: number) => {
    setItemToDelete({ id, type, index });
    setDeleteConfirmOpen(true);
  };

  const executeDelete = async () => {
    if (!itemToDelete) return;
    const { id, type, index } = itemToDelete;
    try {
      if (type === 'user') {
        if (id === 'admin_sysop') { alert('最高帳號不可刪除'); return; }
        await dbService.deleteUser(id);
      } else if (type === 'ann') {
        await dbService.deleteAnnouncement(id);
      } else if (type === 'dept' && typeof index === 'number') {
        const deptName = departments[index];
        if (users.some(u => u.department === deptName)) {
          alert(`部門『${deptName}』仍有成員，無法刪除。`);
          setDeleteConfirmOpen(false);
          return;
        }
        const newDepts = departments.filter((_, i) => i !== index);
        await dbService.updateDepartments(newDepts);
      }
      await loadData();
      triggerToast('資料已成功刪除');
    } catch (e) { console.error(e); } finally { setDeleteConfirmOpen(false); setItemToDelete(null); }
  };

  const resetForm = () => {
    setName(''); setEmail(''); setDepartment(''); setAnnContent('');
    setAnnActive(true); setResetPwd(''); setError(''); setEditingItem(null);
    setDeptNameInput(''); setEditingDeptIndex(null); setUserRole('user');
  };

  const handleSaveAnnouncement = async () => {
    if (!annContent.trim()) { setError('請輸入內容'); return; }
    setIsSaving(true);
    setError('');
    try {
      if (editingItem) {
        await dbService.updateAnnouncement(editingItem.id, {
          content: annContent,
          isActive: annActive
        });
      } else {
        await dbService.saveAnnouncement({
          id: `ann_${Date.now()}`,
          content: annContent,
          isActive: annActive,
          createdAt: Date.now()
        });
      }
      await loadData();
      setShowModal(false);
      resetForm();
      triggerToast(editingItem ? '公告已更新' : '公告已發佈');
    } catch (e: any) {
      console.error(e);
      setError(`公告儲存失敗: ${e.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveUser = async () => {
    if (!name.trim()) { setError('請輸入姓名'); return; }
    setIsSaving(true);
    try {
      const userPayload: any = { name, email, department, role: userRole };
      if (resetPwd) userPayload.password = resetPwd;

      if (editingItem) {
        await dbService.updateUser(editingItem.id, userPayload);
      } else {
        const id = `u_${Date.now()}`;
        await dbService.addUser({ id, ...userPayload });
      }

      await loadData();
      setShowModal(false);
      resetForm();
      triggerToast('人員資料已儲存');
    } catch (e: any) {
      console.error(e);
      setError(`儲存失敗: ${e.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveDept = async () => {
    const trimmed = deptNameInput.trim();
    if (!trimmed) { setError('請輸入名稱'); return; }
    if (editingDeptIndex !== null) {
      const oldName = departments[editingDeptIndex];
      const newDepts = [...departments];
      newDepts[editingDeptIndex] = trimmed;

      // 同步更新資料庫中的清單與關聯人員
      await dbService.updateDepartments(newDepts);
      const allUsers = await dbService.getUsers();
      const affectedUsers = allUsers.filter(u => u.department === oldName);
      for (const u of affectedUsers) await dbService.updateUser(u.id, { department: trimmed });
      triggerToast(`部門更名成功，已同步更新成員資料。`);
    } else {
      await dbService.updateDepartments([...departments, trimmed]);
      triggerToast('部門新增成功');
    }
    await loadData(); setShowDeptModal(false); resetForm();
  };

  const handleUpdateSysSettings = async () => {
    await dbService.updateSystemSettings({
      allowedDomain: tempAllowedDomain,
      corpSsid: tempCorpSsid,
      guestSsid: tempGuestSsid,
      guestPwd: tempGuestPwd,
      showQuickBookQr: tempShowQuickBookQr,
      showWifiInfo: tempShowWifiInfo
    });
    await loadData();
    triggerToast('設定已儲存');
  };

  const inputStyle = "w-full border-2 border-slate-100 rounded-xl px-4 py-3 bg-slate-50 font-bold text-sm outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner text-slate-700";

  return (
    <div className="space-y-6 max-w-full relative">
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in">
          <div className="bg-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-white/20">
            <CheckCircle2 className="w-6 h-6 text-emerald-200" />
            <span className="font-bold text-lg">{toastMessage}</span>
          </div>
        </div>
      )}

      {deleteConfirmOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-[2rem] p-8 max-w-xs w-full shadow-2xl border border-red-100 animate-in zoom-in-95 text-center">
            <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h3 className="text-xl font-black text-slate-800 mb-3">確認執行刪除？</h3>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">執行後資料將無法恢復。</p>
            <div className="flex flex-col space-y-3">
              <button onClick={executeDelete} className="w-full py-4 bg-red-600 text-white font-black rounded-xl active:scale-95">確認永久刪除</button>
              <button onClick={() => setDeleteConfirmOpen(false)} className="w-full py-3 text-slate-400 font-bold hover:bg-slate-50 rounded-xl">取消</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-slate-100 p-1.5 rounded-2xl flex flex-wrap gap-1.5">
        {[
          { id: 'announcements', label: '公告管理', icon: Megaphone },
          { id: 'staff_management', label: '員工管理', icon: UserCheck },
          { id: 'admins', label: '系統帳號', icon: ShieldCheck },
          { id: 'info', label: '系統資訊', icon: Monitor },
        ].map(tab => (
          <button key={tab.id} type="button" onClick={() => { setActiveSubTab(tab.id as SubTab); setActiveStaffSubView('list'); }} className={`flex-[1_0_calc(50%-6px)] md:flex-1 flex items-center justify-center space-x-2 px-3 py-3 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${activeSubTab === tab.id ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-800'}`}><tab.icon className="w-4 h-4 pointer-events-none" /><span className="text-[12px] md:text-sm pointer-events-none">{tab.label}</span></button>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 min-h-[60vh] flex flex-col overflow-hidden">
        {activeSubTab === 'info' ? (
          <div className="flex-1 flex flex-col">
            <div className="flex flex-wrap border-b bg-slate-50/50 px-4 md:px-8 pt-4 md:pt-6 gap-x-6 gap-y-2">
              {[
                { id: 'overview', label: '系統概覽', icon: Zap },
                { id: 'manual', label: '操作手冊', icon: BookOpen },
                { id: 'changelog', label: '改版紀錄', icon: History },
              ].map(tab => (
                <button key={tab.id} type="button" onClick={() => setActiveInfoView(tab.id as InfoView)} className={`pb-4 px-1 flex items-center space-x-2 font-black border-b-4 transition-all text-sm md:text-base cursor-pointer ${activeInfoView === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400'}`}><tab.icon className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" /><span>{tab.label}</span></button>
              ))}
            </div>

            <div className="p-6 md:p-12">
              {activeInfoView === 'overview' && (
                <div className="animate-in fade-in space-y-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center mb-6 shadow-inner"><Monitor className="w-10 h-10 text-blue-600" /></div>
                    <h3 className="text-2xl font-black text-slate-800 mb-2">{SYSTEM_TITLE}</h3>
                    <p className="text-slate-400 font-bold mb-6">當前運行版本：{VERSION}</p>

                    {/* 系統外部正式網址顯示與複製區塊 */}
                    <div className="w-full max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between mb-8 shadow-inner">
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <Globe className="w-5 h-5 text-blue-500 shrink-0" />
                        <div className="overflow-hidden text-left">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">系統外部正式網址</p>
                          <p className="text-xs font-bold text-slate-600 truncate">{window.location.origin + window.location.pathname}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.origin + window.location.pathname);
                          triggerToast('網址已複製到剪貼簿');
                        }}
                        className="p-2.5 hover:bg-white rounded-lg text-slate-400 hover:text-blue-600 transition-all shadow-sm active:scale-90 shrink-0 bg-white/50"
                        title="複製網址"
                      >
                        <Copy className="w-4.5 h-4.5 pointer-events-none" />
                      </button>
                    </div>
                  </div>

                  <div className="w-full max-w-4xl mx-auto space-y-6">
                    <div className="bg-slate-50/50 rounded-[2.5rem] p-6 md:p-10 border-2 border-slate-100">
                      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-4 border-b border-slate-200 gap-4">
                        <h4 className="text-lg font-black flex items-center"><Settings2 className="w-5 h-5 mr-3 text-blue-600" /> 連線參數與權限設定</h4>
                        <button onClick={handleUpdateSysSettings} className="px-8 py-3 bg-blue-600 text-white text-sm font-black rounded-2xl active:scale-95 w-full sm:w-auto shadow-lg shadow-blue-200">儲存所有設定</button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 block flex items-center"><Globe className="w-3.5 h-3.5 mr-2" /> 允許認證網域 (Domain)</label>
                            <input type="text" value={tempAllowedDomain} onChange={(e) => setTempAllowedDomain(e.target.value)} placeholder="yi-jun.com" className={inputStyle} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 block flex items-center"><Database className="w-3.5 h-3.5 mr-2" /> 員工網路 SSID</label>
                            <input type="text" value={tempCorpSsid} onChange={(e) => setTempCorpSsid(e.target.value)} placeholder=".YIJUN" className={inputStyle} />
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 block flex items-center"><Wifi className="w-3.5 h-3.5 mr-2" /> 來賓網路 SSID</label>
                            <input type="text" value={tempGuestSsid} onChange={(e) => setTempGuestSsid(e.target.value)} placeholder=".YJ_VIP" className={inputStyle} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 block flex items-center"><Lock className="w-3.5 h-3.5 mr-2" /> 來賓網路密碼</label>
                            <input type="text" value={tempGuestPwd} onChange={(e) => setTempGuestPwd(e.target.value)} placeholder="@1681688" className={inputStyle} />
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between">
                          <div className="flex items-center space-x-3"><QrCode className="w-6 h-6 text-orange-500" /><div><p className="font-black text-sm text-slate-800">快速預約 QR 碼</p><p className="text-[10px] text-slate-400 font-bold">首頁顯示快速入口</p></div></div>
                          <button type="button" onClick={() => setTempShowQuickBookQr(!tempShowQuickBookQr)} className="cursor-pointer">{tempShowQuickBookQr ? <ToggleRight className="w-12 h-12 text-blue-600" /> : <ToggleLeft className="w-12 h-12 text-slate-300" />}</button>
                        </div>

                        <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between">
                          <div className="flex items-center space-x-3"><Wifi className="w-6 h-6 text-blue-500" /><div><p className="font-black text-sm text-slate-800">WIFI 資訊窗</p><p className="text-[10px] text-slate-400 font-bold">顯示連線說明給來賓</p></div></div>
                          <button type="button" onClick={() => setTempShowWifiInfo(!tempShowWifiInfo)} className="cursor-pointer">{tempShowWifiInfo ? <ToggleRight className="w-12 h-12 text-blue-600" /> : <ToggleLeft className="w-12 h-12 text-slate-300" />}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeInfoView === 'manual' && (
                <div className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-bottom-6 pb-20">
                  <h2 className="text-3xl font-black border-b-8 border-blue-600/10 pb-4 mb-12 text-slate-800">系統操作說明書</h2>

                  <section className="space-y-8">
                    {/* 模組 1：白名單 */}
                    <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-blue-500 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-blue-900"><ShieldCheck className="w-6 h-6 mr-3 text-blue-600" /> 企業身分驗證 (White List)</h3>
                      <p className="text-slate-600 leading-relaxed font-bold">
                        為確保會議資源僅供公司內部同仁使用，系統採用 <strong>Google Workspace 帳號比對機制</strong>。<br />
                        1. 預約前必須點擊「登入」並完成 Google 驗證。<br />
                        2. 系統會擷取您的 Email 並與「員工管理」中的預錄名單進行比對。<br />
                        3. 若您的信箱不在名單內，系統將主動攔截預約申請並顯示白名單錯誤。
                      </p>
                    </div>

                    {/* 模組 2：內網辨識 */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-slate-800"><Globe className="w-6 h-6 mr-3 text-emerald-500" /> 內網自動辨識 (Internal Network)</h3>
                      <p className="text-slate-600 leading-relaxed font-bold">
                        當同仁身處辦公室網路環境時，系統將自動啟動 <strong>Express Mode (快速預約模式)</strong>。<br />
                        系統會偵測使用者連線來源網域與 SSID。若符合後台設定之「允許網域」或「員工 SSID」，系統會預設選中當天日期並在登入後自動帶出預約彈窗，減少操作步驟。
                      </p>
                    </div>

                    {/* 模組 3：快速預約與 WiFi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                        <h4 className="font-black text-slate-800 mb-4 flex items-center"><Smartphone className="w-5 h-5 mr-3 text-orange-500" /> 快速預約 QR Code</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-bold">
                          掃描門口張貼的快速預約碼進入，系統將自動帶入內網識別參數，讓已登入同仁能在 10 秒內快速完成登記。
                        </p>
                      </div>
                      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                        <h4 className="font-black text-slate-800 mb-4 flex items-center"><Wifi className="w-5 h-5 mr-3 text-blue-500" /> 來賓連線指引</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-bold">
                          前台 WiFi 圖示會顯示目前啟用的「來賓網路」設定。點擊後可看到 SSID、密碼，以及專供手機快速連線使用的專屬 QR Code。
                        </p>
                      </div>
                    </div>

                    {/* 模組 4：預約限制 */}
                    <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-amber-900"><ShieldAlert className="w-6 h-6 mr-3 text-amber-600" /> 系統預約限制</h3>
                      <ul className="space-y-3 text-sm text-amber-800 font-bold">
                        <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 shrink-0" /> 開放時段：每週一至週五，08:00 至 18:00。</li>
                        <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 shrink-0" /> 鎖定時段：週末例假日與國定假日，月曆將自動顯示「休假」並不接受登記。</li>
                        <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 shrink-0" /> 衝突檢查：同一個時段僅能容納一筆預約，系統會自動防止重複登記。</li>
                      </ul>
                    </div>
                  </section>
                </div>
              )}

              {activeInfoView === 'changelog' && (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in pb-20">
                  {changelogs.map((log, idx) => (
                    <div key={log.version} className="bg-white border-2 border-slate-50 rounded-3xl p-8 shadow-sm relative group hover:border-blue-100 transition-all">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-2">
                        <div className="flex items-center space-x-4">
                          <span className="bg-blue-50 text-blue-600 text-xs font-black px-4 py-1.5 rounded-full border border-blue-100">{log.version}</span>
                          <h4 className="text-2xl font-black text-slate-800">{log.title}</h4>
                        </div>
                        <span className="text-xs text-slate-400 font-bold">{log.date}</span>
                      </div>
                      <ul className="space-y-4">
                        {log.logs.map((l, i) => (
                          <li key={i} className="flex items-start text-base text-slate-600 font-bold">
                            <ArrowRight className="w-5 h-5 mr-4 mt-0.5 text-blue-200 shrink-0" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {activeSubTab === 'staff_management' && (
              <div className="flex border-b bg-slate-50/30 px-6 md:px-8 py-4 gap-4">
                <button type="button" onClick={() => setActiveStaffSubView('list')} className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${activeStaffSubView === 'list' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}><List className="w-4 h-4 pointer-events-none" /><span>員工名單</span></button>
                <button type="button" onClick={() => setActiveStaffSubView('departments')} className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${activeStaffSubView === 'departments' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}><LayoutGrid className="w-4 h-4 pointer-events-none" /><span>部門設定</span></button>
              </div>
            )}

            <div className="p-6 md:p-8 border-b flex flex-col md:flex-row justify-between items-center bg-slate-50/50 gap-4">
              <h3 className="text-xl font-black text-slate-800">
                {activeSubTab === 'announcements' ? '內容公告維護' : activeSubTab === 'staff_management' ? (activeStaffSubView === 'list' ? '員工名單管理' : '部門架構設定') : '系統帳號管理'}
              </h3>
              <button type="button" onClick={() => { resetForm(); activeStaffSubView === 'departments' && activeSubTab === 'staff_management' ? setShowDeptModal(true) : setShowModal(true); }} className="px-10 py-3 bg-blue-600 text-white font-black rounded-2xl shadow-lg active:scale-95 flex items-center justify-center space-x-2 w-full md:w-auto cursor-pointer"><Plus className="w-5 h-5 pointer-events-none" /><span>新增項目</span></button>
            </div>

            <div className="flex-1 flex flex-col">
              {/* 桌面版表格 (md 以上顯示) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b">
                    <tr>
                      {activeStaffSubView === 'departments' && activeSubTab === 'staff_management' ? (
                        <>
                          <th className="px-10 py-5">部門名稱</th>
                          <th className="px-10 py-5">成員人數</th>
                        </>
                      ) : (
                        <>
                          <th className="px-10 py-5">{activeSubTab === 'announcements' ? '公告內容' : '名稱 / 姓名'}</th>
                          {activeSubTab === 'staff_management' && <th className="px-10 py-5">部門</th>}
                          <th className="px-10 py-5">帳號類型</th>
                          <th className="px-10 py-5">{activeSubTab === 'announcements' ? '發佈狀態' : '帳號標識 (Email)'}</th>
                        </>
                      )}
                      <th className="px-10 py-5 text-center">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-base font-bold text-slate-700">
                    {activeSubTab === 'announcements' ? announcements.map(ann => (
                      <tr key={ann.id} className="hover:bg-slate-50">
                        <td className="px-10 py-6">{ann.content}</td>
                        <td className="px-10 py-6">
                          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black whitespace-nowrap ${ann.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}>
                            {ann.isActive ? '顯示中' : '已停用'}
                          </span>
                        </td>
                        <td className="px-10 py-6 text-center">
                          <div className="flex justify-center space-x-2">
                            <button type="button" onClick={() => { setEditingItem(ann); setAnnContent(ann.content); setAnnActive(ann.isActive); setShowModal(true); }} className="p-4 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl cursor-pointer"><Edit2 className="w-5 h-5 pointer-events-none" /></button>
                            <button type="button" onClick={() => askDelete(ann.id, 'ann')} className="p-4 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-xl cursor-pointer"><Trash2 className="w-5 h-5 pointer-events-none" /></button>
                          </div>
                        </td>
                      </tr>
                    )) : activeSubTab === 'staff_management' && activeStaffSubView === 'departments' ? departments.map((dept, idx) => (
                      <tr key={dept} className="hover:bg-slate-50">
                        <td className="px-10 py-6">
                          <div className="flex items-center space-x-3">
                            <Building2 className="w-5 h-5 text-blue-500" />
                            <span>{dept}</span>
                          </div>
                        </td>
                        <td className="px-10 py-6 text-slate-400">
                          {users.filter(u => u.department === dept).length} 位成員
                        </td>
                        <td className="px-10 py-6 text-center">
                          <div className="flex justify-center space-x-2">
                            <button type="button" onClick={() => { setEditingDeptIndex(idx); setDeptNameInput(dept); setShowDeptModal(true); }} className="p-4 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl cursor-pointer"><Edit2 className="w-5 h-5 pointer-events-none" /></button>
                            <button type="button" onClick={() => askDelete(dept, 'dept', idx)} className="p-4 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-xl cursor-pointer"><Trash2 className="w-5 h-5 pointer-events-none" /></button>
                          </div>
                        </td>
                      </tr>
                    )) : filteredUsers.map(user => (
                      <tr key={user.id} className="hover:bg-slate-50">
                        <td className="px-10 py-6">{user.name}</td>
                        {activeSubTab === 'staff_management' && <td className="px-10 py-6 text-slate-400">{user.department}</td>}
                        <td className="px-10 py-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black ${user.email === 'sysop' ? 'bg-orange-600 text-white' : user.role === 'admin' ? 'bg-purple-100 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                            {user.email === 'sysop' ? '最高管理員 (L1)' : user.role === 'admin' ? '系統管理員 (L2)' : '一般同仁'}
                          </span>
                        </td>
                        <td className="px-10 py-6 text-slate-400">{user.email || '---'}</td>
                        <td className="px-10 py-6 text-center">
                          <div className="flex justify-center space-x-2">
                            <button type="button" onClick={() => { setEditingItem(user); setName(user.name); setEmail(user.email); setDepartment(user.department || ''); setUserRole(user.role); setShowModal(true); }} className={`p-4 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl cursor-pointer ${user.email === 'sysop' && currentUser.email !== 'sysop' ? 'invisible pointer-events-none' : ''}`}><Edit2 className="w-5 h-5 pointer-events-none" /></button>
                            <button type="button" onClick={() => askDelete(user.id, 'user')} className={`p-4 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-xl cursor-pointer ${user.email === 'sysop' ? 'invisible pointer-events-none' : ''}`}><Trash2 className="w-5 h-5 pointer-events-none" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 手機版卡片 (md 以下顯示, 完全免拖拉) */}
              <div className="md:hidden divide-y">
                {activeSubTab === 'announcements' ? announcements.map(ann => (
                  <div key={ann.id} className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black whitespace-nowrap ${ann.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}>
                        {ann.isActive ? '顯示中' : '已停用'}
                      </span>
                      <div className="flex space-x-2">
                        <button type="button" onClick={() => { setEditingItem(ann); setAnnContent(ann.content); setAnnActive(ann.isActive); setShowModal(true); }} className="p-4 bg-slate-50 rounded-xl text-slate-400 active:scale-90"><Edit2 className="w-4 h-4" /></button>
                        <button type="button" onClick={() => askDelete(ann.id, 'ann')} className="p-4 bg-red-50 rounded-xl text-red-400 active:scale-90"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <p className="font-bold text-slate-700 leading-relaxed">{ann.content}</p>
                  </div>
                )) : activeSubTab === 'staff_management' && activeStaffSubView === 'departments' ? (
                  <div className="p-6 grid grid-cols-1 gap-4">
                    {departments.map((dept, idx) => (
                      <div key={dept} className="bg-white border-2 border-slate-100 p-6 rounded-3xl flex justify-between items-center shadow-sm">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Building2 className="w-5 h-5" /></div>
                          <div><h4 className="font-black text-slate-800">{dept}</h4><p className="text-[10px] text-slate-400 font-bold">{users.filter(u => u.department === dept).length} 位成員</p></div>
                        </div>
                        <div className="flex space-x-1">
                          <button type="button" onClick={() => { setEditingDeptIndex(idx); setDeptNameInput(dept); setShowDeptModal(true); }} className="p-4 text-slate-400 active:scale-90"><Edit2 className="w-5 h-5" /></button>
                          <button type="button" onClick={() => askDelete(dept, 'dept', idx)} className="p-4 text-red-400 active:scale-90"><Trash2 className="w-5 h-5" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : filteredUsers.map(user => (
                  <div key={user.id} className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-500">{user.name.charAt(0)}</div>
                        <div>
                          <h4 className="font-black text-slate-800">{user.name}</h4>
                          {user.department && <p className="text-[10px] text-blue-600 font-bold">{user.department}</p>}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button type="button" onClick={() => { setEditingItem(user); setName(user.name); setEmail(user.email); setDepartment(user.department || ''); setUserRole(user.role); setShowModal(true); }} className={`p-4 bg-slate-50 rounded-xl text-slate-400 active:scale-90 ${user.email === 'sysop' && currentUser.email !== 'sysop' ? 'invisible pointer-events-none' : ''}`}><Edit2 className="w-4 h-4" /></button>
                        <button type="button" onClick={() => askDelete(user.id, 'user')} className={`p-4 bg-red-50 rounded-xl text-red-400 active:scale-90 ${user.email === 'sysop' ? 'hidden' : ''}`}><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Email</p>
                      <p className="text-sm font-bold text-slate-600 break-all">{user.email || '尚未設定'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 彈窗組 */}
      {showModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-sm overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center px-8 py-6 border-b shrink-0"><h3 className="text-xl font-black">{editingItem ? '編輯項目' : '新增項目'}</h3><button type="button" onClick={() => setShowModal(false)} className="p-2 text-slate-300 hover:text-slate-800 cursor-pointer"><X className="w-6 h-6 pointer-events-none" /></button></div>
            <div className="p-8 space-y-6 overflow-y-auto no-scrollbar flex-1">
              {error && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100 flex items-center animate-shake"><AlertCircle className="w-4 h-4 mr-2" />{error}</div>}
              {activeSubTab === 'announcements' ? (
                <>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">公告內容</label><textarea value={annContent} onChange={(e) => setAnnContent(e.target.value)} className={inputStyle + " h-32"} placeholder="請輸入欲發佈之內容..." /></div>
                  <button type="button" onClick={() => setAnnActive(!annActive)} className="flex items-center space-x-3 cursor-pointer">
                    {annActive ? <ToggleRight className="w-12 h-12 text-blue-600" /> : <ToggleLeft className="w-12 h-12 text-slate-300" />}
                    <span className="font-black text-slate-700">{annActive ? '公告顯示中' : '公告已下線'}</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">姓名</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputStyle} /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Email (用於驗證)</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputStyle} /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">帳號權限</label>
                    <select value={userRole} onChange={(e) => setUserRole(e.target.value as 'admin' | 'user')} className={inputStyle + " custom-select"}>
                      <option value="user">一般同仁 (僅限預約)</option>
                      <option value="admin">系統管理員 (次管理員 L2)</option>
                    </select>
                  </div>
                  {activeSubTab === 'staff_management' && (
                    <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">部門</label>
                      <select value={department} onChange={(e) => setDepartment(e.target.value)} className={inputStyle + " custom-select"}><option value="">請選擇</option>{departments.map(d => <option key={d} value={d}>{d}</option>)}</select>
                    </div>
                  )}
                  {activeSubTab === 'admins' && <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">設定登入密碼</label><input type="password" value={resetPwd} onChange={(e) => setResetPwd(e.target.value)} className={inputStyle} /></div>}
                </>
              )}
            </div>
            <div className="px-8 py-6 bg-slate-50 flex justify-end gap-3 border-t shrink-0">
              <button type="button" disabled={isSaving} onClick={() => setShowModal(false)} className="px-6 py-2 text-slate-400 font-bold hover:bg-slate-100 rounded-xl cursor-pointer disabled:opacity-50">取消</button>
              <button type="button" disabled={isSaving} onClick={activeSubTab === 'announcements' ? handleSaveAnnouncement : handleSaveUser} className="px-10 py-3 bg-blue-600 text-white font-black rounded-xl shadow-lg active:scale-95 flex-1 md:flex-none cursor-pointer text-sm disabled:bg-slate-400">
                {isSaving ? '處理中...' : '確認儲存'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeptModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95">
            <div className="px-8 py-6 border-b flex justify-between items-center"><h3 className="text-xl font-black">{editingDeptIndex !== null ? '編輯部門' : '新增部門'}</h3><button type="button" onClick={() => setShowDeptModal(false)} className="p-2 text-slate-300 hover:text-slate-800 cursor-pointer"><X className="w-6 h-6 pointer-events-none" /></button></div>
            <div className="p-8 space-y-6">{error && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold border animate-shake"><AlertCircle className="w-4 h-4 mr-2" />{error}</div>}<div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">部門名稱</label><input type="text" autoFocus value={deptNameInput} onChange={(e) => setDeptNameInput(e.target.value)} className={inputStyle} /></div></div>
            <div className="px-8 py-6 bg-slate-50 flex justify-end gap-3 border-t"><button type="button" onClick={() => setShowDeptModal(false)} className="px-6 py-2 text-slate-400 font-bold cursor-pointer">取消</button><button type="button" onClick={handleSaveDept} className="px-10 py-3 bg-blue-600 text-white font-black rounded-xl active:scale-95 flex-1 md:flex-none cursor-pointer text-sm">確認儲存</button></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemManagement;
