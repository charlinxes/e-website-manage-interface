# HOLO購物網後台管理
一個基於 Vue 2 和 BootStrap 構建的響應式的電商網站後台管理，請用以下帳號進行登陸瀏覽，內已含部分預設內容<br/>
[前台網站](https://github.com/chartlines/e-website-user-interface)的數據資料都會從此帳號中調用

 - email：c29939049@gamil.com
 - password: Cb29939049

<a name="table-of-contents"></a>
## 目錄
  1. [目的](#purpose)
  1. [使用工具](#resources)

<a name="purpose"></a>
## 目的

  - [1.1](#1.1) <a name='1.1'></a> **操作產品**：<br>
  可以在產品列表頁面新增和編輯商品的細節，自訂商品圖片、標題、價格、描述，並決定是否直接啟用，使其呈現於用戶於前台瀏覽的商品列表

  - [1.2](#1.2) <a name='1.2'></a> **操作優惠卷**：<br>
  可以在優惠卷列表頁面新增和編輯優惠卷的細節，設置優惠卷標題、到期日和折扣百分比，並決定是否直接啟用，使用戶於結帳時通過輸入對應的優惠碼即可享受到對應折扣優惠

  - [1.3](#1.3) <a name='1.3'></a> **呈現訂單列表**：<br>
  可以在訂單列表頁面確認已下訂的訂單，包括下訂的時間、商品內容、用戶聯絡方式和訂單金額，並了解到該訂單是否已付款成功

  **[⬆ 回到頂端](#table-of-contents)**

<a name="resources"></a>
## 使用工具

  - [2.1](#2.1) <a name='2.1'></a> **六角學院API**：<br>
  串接[六角學院開放的API](https://github.com/hexschool/vue-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89)來模擬向後端伺服器請求資料的行為

  - [2.2](#2.2) <a name='2.2'></a> **BootStrap 5**：<br>
  後台管理使用BootStrap的Dashboard版型為基底，並通過Utilities來客製化Component樣式細節。由於BootStrap整體內容過於龐大，因此僅從Bootstrap引入部分使用到的CSS和JavaScript

  - [2.3](#2.3) <a name='2.3'></a> **Vue 2**：<br>
  使用Vue CLI來快速建置環境，並通過Vue-Router來驗證登錄狀態和劃分前端路由。此外，網頁內填寫的表單都使用了Vee-validate下的元件來做表單驗證和自訂錯誤提示

  **[⬆ 回到頂端](#table-of-contents)**
