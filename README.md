# 羿鈞科技會議室預約系統 (Meeting Hub)

![Version](https://img.shields.io/badge/Version-2.206-orange)
![Security](https://img.shields.io/badge/Auth-Google_Workspace-blue)
![Database](https://img.shields.io/badge/DB-Firebase_Firestore-yellow)

這是一款專為羿鈞科技設計的企業級會議室預約管理系統。致力於提供直覺、安全且符合台灣使用習慣的辦公空間管理體驗。

---

## 🌟 系統亮點 (V2.206)

- **雙軌權限位階管理**: 提供「最高管理員 (L1)」與「系統管理員 (L2)」選項，支援靈活的角色指派。
- **權限安全遮蔽**: 強化識別機制，確保 L2 次管理員無法編輯所有 L1 重點帳號。
- **部門關聯自動化**: 修復部門更名邏輯，確保部門清單與人員資料同步。
- **資料庫兼容性強化**: 導入 Upsert 機制，徹底修復維護時的同步失敗錯誤。

---

## 📅 版本更新紀錄 (Changelog)

### v2.206 - 雙軌權限位階管理上線 (2026-02-09)
- 整合層級分配：在新增或編輯人員時，可明確指派「最高管理員 (L1)」或「系統管理員 (L2)」。
- 識別邏輯強化：支援以實體角色 (admin_l1/l2) 或 Email 為主鍵的雙軌權限識別。

### v2.205 - 管理權限位階邏輯修正 (2026-02-09)
- 修正 L1 最高管理員識別：改以 Email (sysop) 作為 L1 識別碼。

---
*Senior Frontend Engineer - 羿鈞科技專案開發小組*