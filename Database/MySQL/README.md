# Mysql
##載入模組
```
npm install mysql
```
##建立連線
```javascript
var mysql      = require('mysql');        //載入模組
var connection = mysql.createConnection({ //建立連接
   host     : 'localhost',                //mysql伺服器位置
   user     : 'root',                     //mysql使用者名稱
   password : 'user',                     //mysql使用者密碼
   database : 'test'                      //使用的資料庫
 });

 connection.connect();//開始連接
 ```
##新增資料
```
connection.query(//新增
  //insert into `資料表名稱`,資料表後第一個括弧為欄位名稱,第二個括弧為值
  "INSERT INTO `employees` (`account`,`password`)values ('qwe','asd')"
  ,function(error){
    if(error){
        console.log('寫入資料失敗！');
        throw error;
    }
});
```
##修改
```
connection.query(//修改
  //update `資料表名稱`,SET後where前為修改內容,where後為修改條件
  "UPDATE `employees` SET `account`='zxc',`password`='qwe' where `account`='qwe'"
  ,function(error){
   if(error){
       console.log('更新資料失敗！');
       throw error;
   }
});
```
##刪除
```
connection.query(//刪除
  //delete from `資料表名稱`,where後為判斷條件
  "DELETE FROM  `employees` WHERE `id`>10"
  ,function(error){
   if(error){
       console.log('刪除資料失敗！');
       throw error;
   }
});
```
##查詢
```
connection.query(//查詢
  //select (查詢條件) from `資料表名稱`
  "SELECT * FROM  `employees` " ,
   //查詢結果會放在result裡面
  function(error,result){                                                              
   if(error){
       console.log('查詢資料失敗！');
       throw error;
   }
 console.log(result);
});
```
##結束連線
```
connection.end();
```
