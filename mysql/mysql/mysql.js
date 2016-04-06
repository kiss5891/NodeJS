var mysql      = require('mysql');                                                        //載入模組
var connection = mysql.createConnection({                                                 //建立連接
   host     : 'localhost',                                                                //mysql伺服器位置
   user     : 'root',                                                                     //mysql使用者名稱
   password : 'user',                                                                     //mysql使用者密碼
   database : 'test'                                                                      //使用的資料庫
 });

 connection.connect();                                                                    //開始連接

 connection.query(                                                                        //新增
   "INSERT INTO `employees` (`account`,`password`)values ('qwe','asd')"                   //insert into `資料表名稱`,資料表後第一個括弧為欄位名稱,第二個括弧為值
   ,function(error){
     if(error){
         console.log('寫入資料失敗！');
         throw error;
     }
 });

 connection.query(                                                                        //修改
   "UPDATE `employees` SET `account`='zxc',`password`='qwe' where `account`='qwe'"        //update `資料表名稱`,SET後where前為修改內容,where後為修改條件
   ,function(error){
    if(error){
        console.log('更新資料失敗！');
        throw error;
    }
 });

 connection.query(                                                                        //刪除
   "DELETE FROM  `employees` WHERE `id`>10"                                               //delete from `資料表名稱`,where後為判斷條件
   ,function(error){
    if(error){
        console.log('刪除資料失敗！');
        throw error;
    }
});

connection.query(                                                                         //查詢
  "SELECT * FROM  `employees` "                                                           //select (查詢條件) from `資料表名稱`
  , function(error,result){                                                               //查詢結果會放在result裡面
   if(error){
       console.log('查詢資料失敗！');
       throw error;
   }
 console.log(result);
});

 connection.end();                                                                        //結束連接
