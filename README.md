# 羿鈞科技會議室預約系統 (Meeting Hub)

![Version](https://img.shields.io/badge/Version-2.213-orange)
![Security](https://img.shields.io/badge/Auth-Google_Workspace-blue)
![Database](https://img.shields.io/badge/DB-Firebase_Firestore-yellow)

這是一款專為羿鈞科技設計的企業級會議室預約管理系統。致力於提供直覺、安全且符合台灣使用習慣的辦公空間管理體驗。

---

## 🌟 系統亮點 (V2.213)

- **階層式權限控管**: 「系統概覽」設定正式納入 L1 最高權限保護，防止次管理員誤更動核心連線參數。
- **權限不足提示**: 次管理員進入設定頁面時，系統會自動反灰並顯示警示訊息。
- **穩定 Login 會話管理**: 持續優化管理員登入 Session。

---

## 📅 版本更新紀錄 (Changelog)

### v2.213 - 系統安全性與權限控管強化 (2026-02-09)
- 強制「系統概覽」欄位保護：連線 Domain、SSID、密碼等設定僅限 L1 最高管理員修改。
- 視覺化權限攔截：L2 管理員視圖會自動反灰（Disabled）所有輸入框與開關，並顯示「權限不足」提示標籤。
- 功能性攔截：儲存按鈕加入程式碼層級的權限驗證，雙重保障系統安全。

### v2.212 - 操作日誌資料視覺呈現再強化 (2026-02-09)
- 徹底修復資料切字問題。

---
*Senior Frontend Engineer - 羿鈞科技專案開發小組*