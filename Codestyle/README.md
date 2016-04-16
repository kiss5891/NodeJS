#設計規範(Coding Style)

- 資料型態 
- 參考
    ```javascript
    var   (全域變數)
    let   (區域變數)
    const (區域不可變數)
    ```
  - 範例

  ```javascript
  var a = 5;
  var b = 10;  

  if (a === 5) {
    let a = 4; // The scope is inside the if-block
    var b = 1; // The scope is inside the function

    console.log(a);  // 4
    console.log(b);  // 1
  } 

  console.log(a); // 5
  console.log(b); // 1
  ```
  

- 字串 變數 陣列 物件
- 函式 箭頭函式 建構子 解構子
- 模組 屬性 
- 條件式與等號 
- 區塊 註解 空格 逗號 分號 型別轉換
- 命名規則 


迭代器及產生器 提升 存取器 事件
jQuery
ECMAScript 6 風格
ECMAScript 5 相容性
測試 效能 資源

- 格式
  - 縮排與空格
  - 變數宣告
  - 單雙引號
  - 括弧使用
    標點符號
- 命名
  - 變數常數
  - 方法
  - 類別 
  - 檔案
  - 套件
- 流程控制
- 物件
- 模組
- 註解