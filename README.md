# 一起訂｜校園揪團點餐

以純 HTML、CSS 和 JavaScript 製作的 GitHub Pages 點餐流程原型，無需安裝套件或建置步驟。

## 在 GitHub Pages 發佈

1. 將此專案推送到 GitHub repository。
2. 開啟 repository 的 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**，來源選 `main` 分支與 `/ (root)` 資料夾。
4. 儲存後等待 GitHub Pages 提供網站網址。

## 原型功能

- 合作店家卡片、關鍵字搜尋、餐點類型篩選。
- 店家菜單彈窗與加入購物車。
- 跨店購物車、項目數量增減、單項刪除與清空。
- 一次送出後，依店家彙整顯示訂單與取餐資訊。
- 購物車與送出的示範訂單存在目前瀏覽器的 `localStorage`。

目前送單只會在瀏覽器中記錄並展示示範結果，尚未連接資料庫、登入系統、付款或實際通知合作店家。要正式收單與通知店家，需要再接上後端服務或表單/資料庫 API。
