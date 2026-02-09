
import React, { useState, useEffect, useMemo } from 'react';
import { dbService } from './services/mockDb';
import { User, Booking, Announcement } from './types';
import { SYSTEM_TITLE, VERSION, HOLIDAYS_2026 } from './constants';
import Marquee from './components/Marquee';
import Calendar from './components/Calendar';
import BookingModal from './components/BookingModal';
import AdminSidebar from './components/AdminSidebar';
import SystemManagement from './components/SystemManagement';
import { QRCodeCanvas } from 'qrcode.react';
import {
  Lock,
  X,
  Trash2,
  Edit2,
  LogOut,
  Eye,
  EyeOff,
  ShieldAlert,
  Clock,
  Settings,
  Menu,
  Check,
  Plus,
  Wifi,
  QrCode,
  Zap,
  Sparkles,
  Key,
  Info as InfoIcon,
  AlertCircle,
  ShieldCheck,
  UserCircle,
  ShieldAlert as ShieldAlertIcon
} from 'lucide-react';
import { format, getDay } from 'date-fns';
import { auth } from './services/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const App: React.FC = () => {
  // --- States ---
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [isInternalNetwork, setIsInternalNetwork] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showQuickBookQrModal, setShowQuickBookQrModal] = useState(false);
  const [showWifiInfoModal, setShowWifiInfoModal] = useState(false);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [activeAdminTab, setActiveAdminTab] = useState('bookings');
  const [isLoginView, setIsLoginView] = useState(false);
  const [loginAccount, setLoginAccount] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [whiteListError, setWhiteListError] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberAdmin, setRememberAdmin] = useState(false);

  // 刪除確認 State
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // 系統動態設定
  const [sysSettings, setSysSettings] = useState({
    allowedDomain: 'yi-jun.com',
    corpSsid: '.YIJUN',
    guestSsid: '.YJ_VIP',
    guestPwd: '@1681688',
    showQuickBookQr: true,
    showWifiInfo: true,
    requireGoogleLogin: true
  });

  const quickBookUrl = useMemo(() => {
    const base = window.location.origin + window.location.pathname;
    const cleanBase = base.endsWith('/') ? base : base + '/';
    return `${cleanBase}?mode=express`;
  }, []);

  const wifiConnectString = useMemo(() => {
    return `WIFI:S:${sysSettings.guestSsid};T:WPA;P:${sysSettings.guestPwd};;`;
  }, [sysSettings]);

  const loadData = async () => {
    const [bks, anns, settings] = await Promise.all([
      dbService.getBookings(),
      dbService.getAnnouncements(),
      dbService.getSystemSettings()
    ]);
    setBookings(bks);
    setAnnouncements(anns);
    setSysSettings(settings);
  };

  const handleGoogleLogin = async () => {
    setWhiteListError('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;

      if (!userEmail) {
        alert("無法取得 Google 帳號 Email，請重試。");
        return;
      }

      const allUsers = await dbService.getUsers();
      const match = allUsers.find(u => u.email.toLowerCase() === userEmail.toLowerCase());

      if (match) {
        setGoogleUser(match);
        setCurrentUser(match); // 確保 currentUser 也同步更新
        localStorage.setItem('gw_session', JSON.stringify(match));

        // --- 新增：如果角色是 admin，自動登入管理後台 ---
        if (match.role === 'admin') {
          setIsAdminLoggedIn(true);
        }

        if (window.location.search.includes('mode=express')) {
          setTimeout(() => setShowBookingModal(true), 300);
        }
      } else {
        setWhiteListError(`帳號 ${userEmail} 不在公司預約白名單內，請聯繫行政單位。`);
        await auth.signOut();
      }
    } catch (error: any) {
      console.error("Google Login Error Details:", error);
      let errorMsg = "登入過程發生錯誤";

      if (error.code === 'auth/unauthorized-domain') {
        errorMsg = "【授權網域錯誤】請至 Firebase 後台新增 jamesanna.github.io 到 Authorized domains。";
      } else if (error.code === 'auth/popup-blocked') {
        errorMsg = "【彈窗被攔截】請允許此網頁開啟彈出式視窗。";
      } else {
        errorMsg += `：${error.message || '未知原因'}`;
      }

      alert(errorMsg);
    }
  };

  const handleGoogleLogout = () => {
    localStorage.removeItem('gw_session');
    localStorage.removeItem('persisted_admin_session');
    setGoogleUser(null);
    setCurrentUser(null);
    setIsAdminLoggedIn(false);
    setIsSidebarOpen(false);
    setShowBookingModal(false);
    setEditingBooking(null);
    setTimeout(() => { alert('帳號已成功登出'); }, 100);
  };

  useEffect(() => {
    loadData();
    const initSession = async () => {
      const savedGw = localStorage.getItem('gw_session');
      if (savedGw) {
        const latestUsers = await dbService.getUsers();
        const userData = JSON.parse(savedGw);
        const stillExists = latestUsers.find(u => u.id === userData.id);
        if (stillExists) {
          setGoogleUser(stillExists);
          setCurrentUser(stillExists);
          // 關鍵修正：若重載頁面時帳號具備 admin 權限，自動維持管理員狀態
          if (stillExists.role === 'admin') {
            setIsAdminLoggedIn(true);
          }
        } else {
          localStorage.removeItem('gw_session');
        }
      }
      const persistedAdmin = localStorage.getItem('persisted_admin_session');
      if (persistedAdmin) {
        try {
          const userData = JSON.parse(persistedAdmin);
          const latestUsers = await dbService.getUsers();
          const latestAdmins = latestUsers.filter(u => u.role === 'admin');
          const stillValid = latestAdmins.find(a => a.id === userData.id);
          if (stillValid) {
            setCurrentUser(stillValid);
            setIsAdminLoggedIn(true);
            setLoginAccount(stillValid.email);
            setRememberAdmin(true);
          } else {
            localStorage.removeItem('persisted_admin_session');
          }
        } catch (e) { localStorage.removeItem('persisted_admin_session'); }
      }
    };
    initSession();
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'express') {
      setIsInternalNetwork(true);
      const today = new Date();
      setSelectedDate(today);
      if (getDay(today) !== 0 && getDay(today) !== 6 && !HOLIDAYS_2026[format(today, 'yyyy-MM-dd')]) {
        if (localStorage.getItem('gw_session')) {
          setTimeout(() => setShowBookingModal(true), 500);
        }
      }
    } else {
      setIsInternalNetwork(Math.random() > 0.5);
    }
  }, []);

  const handleAdminLogin = async () => {
    const allUsers = await dbService.getUsers();
    const admins = allUsers.filter(u => u.role === 'admin');
    const match = admins.find(a => a.email === loginAccount);
    if (match && match.password === loginPassword) {
      setIsAdminLoggedIn(true);
      setCurrentUser(match);
      setIsLoginView(false);
      setLoginError('');
      setLoginPassword('');
      if (rememberAdmin) localStorage.setItem('persisted_admin_session', JSON.stringify(match));
      else localStorage.removeItem('persisted_admin_session');
    } else {
      setLoginError('管理帳號或密碼錯誤');
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const dateStr = format(date, 'yyyy-MM-dd');
    const isWeekend = getDay(date) === 0 || getDay(date) === 6;
    const isPast = dateStr < format(new Date(), 'yyyy-MM-dd');
    const isHoliday = !!HOLIDAYS_2026[dateStr];
    if (!isWeekend && !isPast && !isHoliday) {
      setEditingBooking(null);
      setShowBookingModal(true);
    }
  };

  const saveBooking = async (userId: string, userName: string, startTime: string, endTime: string, purpose: string, bookingId?: string) => {
    if (bookingId) {
      const currentBookings = await dbService.getBookings();
      const updated = currentBookings.map(b => b.id === bookingId ? { ...b, userId, userName, startTime, endTime, purpose } : b);
      localStorage.setItem('meeting_room_bookings', JSON.stringify(updated));
      setBookings(updated);
    } else {
      const newBooking: Booking = {
        id: `book_${Date.now()}`,
        userId, userName, date: format(selectedDate, 'yyyy-MM-dd'), startTime, endTime, purpose, createdAt: Date.now()
      };
      await dbService.saveBooking(newBooking);
      const updatedBookings = await dbService.getBookings();
      setBookings(updatedBookings);
    }
    setShowBookingModal(false);
    setEditingBooking(null);
    if (window.location.search.includes('mode=express')) {
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  };

  // 真正的刪除執行
  const executeDeleteBooking = async () => {
    if (!deleteConfirmId) return;
    await dbService.deleteBooking(deleteConfirmId);
    const updatedBookings = await dbService.getBookings();
    setBookings(updatedBookings);
    setDeleteConfirmId(null);
  };

  const handleLogoutAdmin = () => {
    handleGoogleLogout();
  };

  const monthlyBookings = useMemo(() => {
    const monthStr = format(selectedDate, 'yyyy-MM');
    return bookings
      .filter(b => b.date.startsWith(monthStr))
      .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime));
  }, [bookings, selectedDate]);

  const dailyBookings = bookings
    .filter(b => b.date === format(selectedDate, 'yyyy-MM-dd'))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const isSelectedDatePast = format(selectedDate, 'yyyy-MM-dd') < format(new Date(), 'yyyy-MM-dd');

  if (isAdminLoggedIn) {
    return (
      <div className="flex h-screen bg-slate-50 overflow-hidden relative">
        <AdminSidebar
          activeTab={activeAdminTab}
          setActiveTab={setActiveAdminTab}
          onLogout={handleLogoutAdmin}
          onReturnToFrontend={() => setIsAdminLoggedIn(false)}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* 後台專用刪除確認彈窗 */}
        {deleteConfirmId && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-white rounded-[2rem] p-8 max-w-xs w-full shadow-2xl border border-red-100 animate-in zoom-in-95 text-center">
              <ShieldAlertIcon className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
              <h3 className="text-xl font-black text-slate-800 mb-3">刪除此筆預約？</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">執行後此時段將重新釋出，<br />該動作無法復原。</p>
              <div className="flex flex-col space-y-3">
                <button onClick={executeDeleteBooking} className="w-full py-4 bg-red-600 text-white font-black rounded-xl shadow-lg shadow-red-200 active:scale-95">確認執行刪除</button>
                <button onClick={() => setDeleteConfirmId(null)} className="w-full py-3 text-slate-400 font-bold hover:bg-slate-50 rounded-xl">取消返回</button>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b h-16 flex items-center justify-between px-4 md:px-6 shadow-sm shrink-0">
            <div className="flex items-center space-x-2 md:space-x-3 overflow-hidden">
              <button type="button" onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-500 shrink-0"><Menu className="w-6 h-6 pointer-events-none" /></button>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-2 overflow-hidden">
                <h2 className="text-sm md:text-base font-bold text-slate-800 tracking-tight whitespace-nowrap">後台管理</h2>
                <div className="flex items-center space-x-1.5 md:space-x-2">
                  <span className="px-1.5 py-0.5 v2-badge text-white text-[9px] rounded-md font-bold shrink-0">{VERSION}</span>
                  <div className="flex items-center space-x-1 bg-slate-800 text-white px-2 py-0.5 rounded-md admin-mode-pulse shrink-0">
                    <ShieldCheck className="w-2.5 h-2.5 text-blue-400 pointer-events-none" />
                    <span className="text-[9px] font-black tracking-widest uppercase hidden xs:inline">管理模式</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 shrink-0">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs font-bold text-slate-800">Admin: {currentUser?.name}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sysop</span>
              </div>
              <div className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg shadow-slate-200">
                {currentUser?.name?.charAt(0)}
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 no-scrollbar">
            {activeAdminTab === 'bookings' ? (
              <div className="space-y-6 max-w-5xl mx-auto pb-10">
                <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-slate-200/40 border border-slate-100 p-4 md:p-10 transition-all overflow-visible relative">
                  <Calendar bookings={bookings} selectedDate={selectedDate} onDateSelect={handleDateSelect} />
                </div>
                <div className="bg-white rounded-[2rem] shadow-sm border overflow-hidden">
                  <div className="p-6 md:p-8 bg-slate-50/50 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 text-lg">{format(selectedDate, 'yyyy年MM月')} 預約總覽清單</h4>
                      <p className="text-xs font-medium text-slate-400">目前共 {monthlyBookings.length} 筆正式行程</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const dateStr = format(selectedDate, 'yyyy-MM-dd');
                        const isWeekend = getDay(selectedDate) === 0 || getDay(selectedDate) === 6;
                        const isPast = dateStr < format(new Date(), 'yyyy-MM-dd');
                        const isHoliday = !!HOLIDAYS_2026[dateStr];
                        if (isWeekend || isPast || isHoliday) {
                          alert(`該日期 (${isHoliday ? HOLIDAYS_2026[dateStr] : "非工作日"}) 不開放預約登記`);
                          return;
                        }
                        setEditingBooking(null);
                        setShowBookingModal(true);
                      }}
                      className="flex items-center justify-center space-x-2 px-6 py-2.5 bg-[#e54304] text-white rounded-xl font-medium text-sm shadow-lg hover:bg-black transition-all active:scale-95 w-full sm:w-auto"
                    >
                      <Plus className="w-4 h-4 pointer-events-none" />
                      <span>新增預約</span>
                    </button>
                  </div>

                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-[10px] font-semibold text-slate-400 uppercase tracking-widest border-b">
                        <tr>
                          <th className="px-8 py-4 text-center">日期</th>
                          <th className="px-8 py-4">時段</th>
                          <th className="px-8 py-4">預約人</th>
                          <th className="px-8 py-4">用途</th>
                          <th className="px-8 py-4 text-center">操作</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y text-sm">
                        {monthlyBookings.length > 0 ? monthlyBookings.map(b => (
                          <tr key={b.id} className={`transition-colors ${b.date === format(selectedDate, 'yyyy-MM-dd') ? 'bg-orange-50/50' : 'hover:bg-slate-50'}`}>
                            <td className="px-8 py-4 text-center">
                              <div className="flex flex-col items-center">
                                <span className="text-[10px] text-slate-400 font-bold uppercase">{format(new Date(b.date), 'EEE')}</span>
                                <span className="text-sm font-black text-slate-700">{format(new Date(b.date), 'dd')}</span>
                              </div>
                            </td>
                            <td className="px-8 py-4 font-bold text-blue-600 whitespace-nowrap">{b.startTime} - {b.endTime}</td>
                            <td className="px-8 py-4 font-bold text-slate-700 whitespace-nowrap">{b.userName}</td>
                            <td className="px-8 py-4 text-slate-500 font-medium truncate max-w-xs">{b.purpose}</td>
                            <td className="px-8 py-4">
                              <div className="flex justify-center items-center space-x-2">
                                <button onClick={() => { setSelectedDate(new Date(b.date)); setEditingBooking(b); setShowBookingModal(true); }} className="p-4 text-slate-400 hover:text-blue-600 active:scale-90 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all"><Edit2 className="w-4 h-4 pointer-events-none" /></button>
                                <button onClick={() => setDeleteConfirmId(b.id)} className="p-4 text-slate-400 hover:text-red-600 active:scale-90 bg-slate-50 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="w-4 h-4 pointer-events-none" /></button>
                              </div>
                            </td>
                          </tr>
                        )) : (
                          <tr><td colSpan={5} className="px-8 py-20 text-center text-slate-300 font-medium italic">本月份尚無預約資料</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="md:hidden divide-y">
                    {monthlyBookings.length > 0 ? monthlyBookings.map(b => (
                      <div key={b.id} className={`p-5 space-y-3 ${b.date === format(selectedDate, 'yyyy-MM-dd') ? 'bg-orange-50/30' : 'bg-white'}`}>
                        <div className="flex justify-between items-start">
                          <div className="flex items-center space-x-2">
                            <div className="bg-slate-900 text-white px-2 py-1 rounded-md text-[10px] font-black">{format(new Date(b.date), 'MM/dd')}</div>
                            <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black">{b.startTime} - {b.endTime}</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button onClick={() => { setSelectedDate(new Date(b.date)); setEditingBooking(b); setShowBookingModal(true); }} className="p-5 text-slate-500 bg-slate-50 rounded-xl active:scale-90"><Edit2 className="w-4 h-4 pointer-events-none" /></button>
                            <button onClick={() => setDeleteConfirmId(b.id)} className="p-5 text-red-400 bg-red-50 rounded-xl active:scale-90"><Trash2 className="w-4 h-4 pointer-events-none" /></button>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-black text-slate-800">{b.userName}</p>
                          <p className="text-xs text-slate-500 font-bold mt-1">{b.purpose}</p>
                        </div>
                      </div>
                    )) : (
                      <div className="p-10 text-center text-slate-300 font-medium italic">本月份尚無預約資料</div>
                    )}
                  </div>
                </div>
              </div>
            ) : <SystemManagement currentUser={currentUser!} onDataUpdate={loadData} />}
          </main>
        </div>
        {showBookingModal && (
          <BookingModal
            date={selectedDate} googleUser={currentUser} isInternalNetwork={true}
            onGoogleLogin={() => { }} onGoogleLogout={handleGoogleLogout} editingBooking={editingBooking}
            onClose={() => { setShowBookingModal(false); setEditingBooking(null); }}
            onSave={saveBooking} existingBookings={bookings.filter(b => b.date === format(selectedDate, 'yyyy-MM-dd'))}
            requireGoogleLogin={sysSettings.requireGoogleLogin}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col relative text-slate-900 overflow-x-hidden">
      <Marquee announcements={announcements} />
      <header className="bg-white/80 backdrop-blur-md shadow-sm py-3 px-4 md:px-12 flex justify-between items-center border-b sticky top-0 z-30 shrink-0">
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="w-9 h-9 v2-badge rounded-xl flex items-center justify-center text-white shadow-lg shrink-0">
            <Sparkles className="w-5 h-5 pointer-events-none" />
          </div>
          <div className="overflow-hidden">
            <h1 className="text-base md:text-lg font-semibold text-slate-800 tracking-tight leading-none truncate">{SYSTEM_TITLE}</h1>
            <div className="flex items-center mt-1 space-x-2">
              <span className="text-[9px] md:text-[10px] text-orange-500 font-medium tracking-widest uppercase shrink-0">{VERSION}</span>
              {isInternalNetwork && (
                <div className="flex items-center text-[8px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md border border-green-100 shrink-0">
                  <div className="w-1 h-1 bg-green-500 rounded-full mr-1 wifi-pulse"></div>
                  <span className="hidden xs:inline">{sysSettings.corpSsid}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1.5 md:space-x-3 shrink-0">
          {googleUser ? (
            <div className="flex items-center bg-slate-900 text-white rounded-full pl-1 pr-3 py-1 border border-slate-800 shadow-sm animate-in fade-in slide-in-from-right-4">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 shadow-inner">{googleUser.name.charAt(0)}</div>
              <span className="ml-2 text-[11px] font-bold hidden sm:inline whitespace-nowrap">{googleUser.name}</span>
              <button type="button" onClick={handleGoogleLogout} className="ml-2 p-1 text-slate-500 hover:text-red-400 transition-colors" title="登出帳號"><LogOut className="w-3.5 h-3.5 pointer-events-none" /></button>
            </div>
          ) : (
            <button type="button" onClick={handleGoogleLogin} className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-600 hover:text-white transition-all text-[11px] font-bold shadow-sm"><UserCircle className="w-4 h-4 pointer-events-none" /><span>登入</span></button>
          )}
          <div className="h-4 w-[1px] bg-slate-200 hidden xs:block"></div>
          <div className="flex items-center space-x-1">
            {sysSettings.showQuickBookQr && (
              <button type="button" onClick={() => setShowQuickBookQrModal(true)} className="p-2 text-slate-300 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"><QrCode className="w-5 h-5 pointer-events-none" /></button>
            )}
            {sysSettings.showWifiInfo && (
              <button type="button" onClick={() => setShowWifiInfoModal(true)} className="p-2 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all"><Wifi className="w-5 h-5 pointer-events-none" /></button>
            )}
            <button
              type="button"
              onClick={() => {
                if (currentUser?.role === 'admin') {
                  setIsAdminLoggedIn(true);
                } else {
                  setIsLoginView(true);
                }
              }}
              className="p-2 text-slate-300 hover:text-slate-800 transition-colors"
            >
              <Settings className="w-5 h-5 pointer-events-none" />
            </button>
          </div>
        </div>
      </header>
      {whiteListError && (
        <div className="mx-4 md:mx-12 mt-4 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center text-red-600 text-sm font-bold shadow-sm animate-in slide-in-from-top">
          <AlertCircle className="w-5 h-5 mr-3 shrink-0 pointer-events-none" />{whiteListError}
          <button type="button" onClick={() => setWhiteListError('')} className="ml-auto p-1.5 hover:bg-red-100 rounded-full transition-colors"><X className="w-4 h-4 pointer-events-none" /></button>
        </div>
      )}
      <main className="max-w-3xl mx-auto w-full flex-1 flex flex-col no-scrollbar">
        <div className="py-6 md:py-10 px-4 float-in">
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-slate-200/40 border border-slate-100 p-4 md:p-10 transition-all overflow-visible"><Calendar bookings={bookings} selectedDate={selectedDate} onDateSelect={handleDateSelect} /></div>
        </div>
        <div className="px-4 md:px-6 space-y-6 md:space-y-8 pb-10 overflow-x-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-semibold text-slate-800 text-lg flex items-center"><span className="w-1.5 h-6 v2-badge rounded-full mr-3"></span>{format(selectedDate, 'yyyy年MM月')} 預約詳情</h3>
              <span className="text-[10px] font-medium text-slate-300 tracking-widest uppercase">Monthly Total {monthlyBookings.length}</span>
            </div>
            {monthlyBookings.length > 0 ? (
              <div className="grid gap-3">
                {monthlyBookings.map((b) => {
                  const bDate = new Date(b.date);
                  const isPast = b.date < format(new Date(), 'yyyy-MM-dd');
                  return (
                    <div key={b.id} className={`bg-white border p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] flex items-center space-x-4 md:space-x-5 hover:border-orange-200 hover:bg-orange-50/10 transition-all group ${b.date === format(selectedDate, 'yyyy-MM-dd') ? 'border-orange-400 ring-2 ring-orange-100' : 'border-slate-100'}`}>
                      <div className="flex flex-col items-center justify-center bg-slate-900 text-white rounded-xl py-2 px-3 shrink-0">
                        <span className="text-[9px] font-bold opacity-60 uppercase leading-none">{format(bDate, 'MM/dd')}</span>
                        <span className="text-[10px] font-black mt-1 uppercase leading-none">{format(bDate, 'EEE')}</span>
                      </div>
                      <div className={`w-16 md:w-20 py-2.5 md:py-3 ${isPast ? 'bg-slate-100' : 'bg-orange-50'} rounded-2xl flex flex-col items-center group-hover:bg-orange-600 transition-colors shrink-0`}>
                        <span className={`text-[9px] md:text-[10px] font-medium ${isPast ? 'text-slate-400' : 'text-orange-600'} group-hover:text-white`}>{b.startTime}</span>
                        <div className="w-3 h-0.5 bg-current opacity-10 my-0.5"></div>
                        <span className={`text-[9px] md:text-[10px] font-medium ${isPast ? 'text-slate-300' : 'text-orange-400'} group-hover:text-orange-100`}>{b.endTime}</span>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h4 className="font-semibold text-slate-800 text-sm md:text-base mb-0.5 truncate">{b.userName}</h4>
                        <p className="text-xs text-slate-400 font-medium truncate">{b.purpose}</p>
                      </div>
                      <div className="pr-1 shrink-0"><div className={`w-2.5 h-2.5 rounded-full ${isPast ? 'bg-slate-200' : 'bg-green-500'}`}></div></div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-16 md:py-20 text-center bg-slate-50/50 rounded-[2rem] border-2 border-dashed border-slate-100">
                <Clock className="w-10 h-10 text-slate-200 mx-auto mb-4 pointer-events-none" /><p className="text-slate-300 font-medium italic">本月份尚無預約資料</p>
              </div>
            )}
          </div>
        </div>
        <footer className="mt-auto py-6 bg-slate-900 text-white flex flex-col items-center shrink-0">
          <div className="v2-badge p-2 rounded-lg mb-2 shadow-lg"><Sparkles className="w-4 h-4 text-white pointer-events-none" /></div>
          <div className="text-center px-4">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-80">{SYSTEM_TITLE}</p>
            <div className="flex items-center justify-center space-x-2 text-[9px] font-medium text-slate-500 uppercase tracking-widest mt-1"><span>Meeting Hub</span><span className="w-1 h-1 bg-slate-700 rounded-full"></span><span>{VERSION}</span></div>
          </div>
        </footer>
      </main>
      {showBookingModal && (
        <BookingModal
          date={selectedDate} googleUser={googleUser} isInternalNetwork={isInternalNetwork}
          onGoogleLogin={handleGoogleLogin} onGoogleLogout={handleGoogleLogout} editingBooking={editingBooking}
          onClose={() => { setShowBookingModal(false); setEditingBooking(null); }}
          onSave={saveBooking} existingBookings={bookings.filter(b => b.date === format(selectedDate, 'yyyy-MM-dd'))}
          requireGoogleLogin={sysSettings.requireGoogleLogin}
        />
      )}
      {showWifiInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-in fade-in" onClick={() => setShowWifiInfoModal(false)}>
          <div className="w-full max-w-md bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl animate-in zoom-in-95 relative overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-purple-600"></div>
            <div className="flex justify-between items-start mb-6 shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center mr-4 shrink-0"><Wifi className="w-6 h-6 text-blue-600 pointer-events-none" /></div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-slate-800 tracking-tight leading-tight">羿鈞科技尊榮貴賓<br />無線網路連線指引</h3>
                  <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">Guest Access Guide</p>
                </div>
              </div>
              <button type="button" onClick={() => setShowWifiInfoModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X className="w-5 h-5 text-slate-300 pointer-events-none" /></button>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-5">
              <div className="bg-blue-50/50 p-5 rounded-[1.5rem] border border-blue-100 space-y-3">
                <h4 className="text-xs font-bold text-blue-900 flex items-center"><InfoIcon className="w-4 h-4 mr-2 pointer-events-none" />連線步驟說明</h4>
                <div className="space-y-3 text-xs leading-relaxed text-slate-600 font-medium">
                  <p>一、請先連線來賓專用 SSID：『 <span className="font-bold text-slate-900">{sysSettings.guestSsid}</span> 』</p>
                  <p>二、連線成功後，請直接開啟裝置的瀏覽器，密碼請輸入『 <span className="font-bold text-slate-900">{sysSettings.guestPwd}</span> 』即可連線。</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 items-center">
                <div className="space-y-3">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100"><p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">SSID</p><p className="text-xl font-black text-blue-600 break-all">{sysSettings.guestSsid}</p></div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100"><p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">PASSWORD</p><p className="text-xl font-black text-orange-600 break-all tracking-wider">{sysSettings.guestPwd}</p></div>
                </div>
                <div className="flex flex-col items-center bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-3">或掃描快速連線</p><QRCodeCanvas value={wifiConnectString} size={100} level="H" marginSize={1} />
                </div>
              </div>
            </div>
            <button type="button" onClick={() => setShowWifiInfoModal(false)} className="w-full mt-6 bg-slate-900 text-white font-semibold py-3.5 rounded-2xl shadow-xl active:scale-95 text-sm">我了解了</button>
          </div>
        </div>
      )}
      {isLoginView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-sm bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-end -mt-4 -mr-4 mb-2"><button type="button" onClick={() => setIsLoginView(false)} className="p-2 text-slate-300 hover:text-slate-800 transition-colors"><X className="w-6 h-6 pointer-events-none" /></button></div>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-slate-100 rounded-[1.2rem] flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110 duration-300"><Lock className="w-7 h-7 text-slate-800 pointer-events-none" /></div>
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">管理員登入</h2>
              <p className="text-[10px] text-slate-400 mt-1 font-medium tracking-widest uppercase">Meeting Hub Admin</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAdminLogin();
              }}
              className="space-y-3.5"
            >
              {loginError && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-medium border border-red-100 flex items-center animate-shake"><ShieldAlert className="w-4 h-4 mr-2 pointer-events-none" />{loginError}</div>}
              <div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Account</label><input type="text" className="w-full px-5 py-3 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-slate-800 transition-all font-bold text-black text-sm" placeholder="請輸入帳號" value={loginAccount} onChange={(e) => setLoginAccount(e.target.value)} /></div>
              <div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Password</label><div className="relative"><input type={showLoginPassword ? "text" : "password"} className="w-full px-5 py-3 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-slate-800 transition-all font-bold text-black pr-12 text-sm" placeholder="請輸入密碼" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /><button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-800 transition-colors">{showLoginPassword ? <EyeOff className="w-5 h-5 pointer-events-none" /> : <Eye className="w-5 h-5 pointer-events-none" />}</button></div></div>

              {/* 記住帳號 Checkbox 視覺強化 */}
              <div className="flex items-center px-1 pt-1.5 group">
                <div
                  onClick={() => setRememberAdmin(!rememberAdmin)}
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all cursor-pointer mr-3 shrink-0 ${rememberAdmin ? 'bg-slate-900 border-slate-900 shadow-md' : 'bg-white border-slate-200 group-hover:border-slate-400'
                    }`}
                >
                  {rememberAdmin && <Check className="w-3.5 h-3.5 text-white pointer-events-none animate-in zoom-in-50" />}
                </div>
                <span onClick={() => setRememberAdmin(!rememberAdmin)} className="text-xs font-bold text-slate-500 cursor-pointer select-none group-hover:text-slate-800 transition-colors">記住此帳號</span>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-2xl shadow-xl hover:bg-black transition-all active:scale-95 mt-3 text-sm tracking-widest uppercase">進入管理介面</button>
            </form>
          </div>
        </div>
      )}
      {showQuickBookQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md animate-in fade-in" onClick={() => setShowQuickBookQrModal(false)}>
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center animate-in zoom-in-95 max-w-sm w-full" onClick={e => e.stopPropagation()}>
            <h4 className="text-base font-semibold text-slate-800 mb-6 flex items-center"><Zap className="w-4 h-4 text-orange-500 mr-2.5 fill-orange-500 pointer-events-none" />快速預約碼</h4>
            <div className="bg-slate-50 p-5 rounded-[1.5rem] border-2 border-dashed border-slate-200"><QRCodeCanvas value={quickBookUrl} size={160} level="L" marginSize={1} /></div>
            <p className="mt-6 text-[10px] font-medium text-slate-400 text-center leading-relaxed">偵測公司內網後可享快速登記</p>
            <button type="button" onClick={() => setShowQuickBookQrModal(false)} className="mt-8 w-full py-3.5 bg-slate-900 text-white font-semibold rounded-2xl shadow-xl active:scale-95 text-sm">關閉</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
