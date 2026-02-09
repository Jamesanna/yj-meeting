# 羿鈞科技會議室預約系統 (Meeting Hub)

![Version](https://img.shields.io/badge/Version-2.205-orange)
![Security](https://img.shields.io/badge/Auth-Google_Workspace-blue)
![Database](https://img.shields.io/badge/DB-Firebase_Firestore-yellow)

這是一款專為羿鈞科技設計的企業級會議室預約管理系統。致力於提供直覺、安全且符合台灣使用習慣的辦公空間管理體驗。

---

## 🌟 系統亮點 (V2.205)

- **雙層管理員機制**: 明確區分「最高管理員 (L1)」與「次管理員 (L2)」，強化核心帳號安全。
- **部門關聯自動化**: 修復部門更名邏輯，確保部門清單與人員資料同步。
- **資料庫兼容性強化**: 導入 Upsert 機制，徹底修復公告維護時的同步失敗錯誤。
- **全平台響應**: 手機端深度優化，支援一鍵直達自動登入。

---

## 📅 版本更新紀錄 (Changelog)

### v2.205 - 管理權限位階邏輯修正 (2026-02-09)
- 修正 L1 最高管理員識別：改以 Email (sysop) 作為 L1 唯一識別碼，解決 Firebase 環境下位階顯示錯誤問題。
- 優化角色指派：在人員編輯彈窗中，明確標示「次管理員 (L2)」。

### v2.204 - 部門管理與關聯更新修復 (2026-02-09)
- 修復部門更名失效：確保新的部門清單正確持久化至資料庫。
- 強化人員關聯同步：優化部門變更時的成員資料同步邏輯。

### v2.203 - 虛擬資料維護邏輯修正 (2026-02-09)
- 修復「No document to update」錯誤：將公告更新改為 Upsert 機制。

---
*Senior Frontend Engineer - 羿鈞科技專案開發小組*