#sqlite 教學

##新增專案資料夾
```bash
$ mkdir sqliteDemo
```

##進入資料夾
```bash
$ cd sqliteDemo
```

##初始化
```bash
$ npm init
```

##安裝sqlite
```bash
$ npm install sqlite3 --save
(會自動在package.json的dependencies上新增 sqlite3)
```

##新增一個檔案sqliteDemo.js
```bash
$ vim sqliteDemo.js
```

##引進sqlite
```javascript
var file = "./sqliteDemo.db";                    
var sqlite3 = require("sqlite3").verbose();      
var db = new sqlite3.Database(file);             
```

##判斷table是否建立
```javascript
db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS  TABLENAME (name TEXT,remark TEXT)");
});
```

##結束連線
```javascript
db.close();
```

##新增資料
```javascript
var sqlInsert = "INSERT INTO TABLENAME(name,remark) VALUES (?,?)";
db.run(sqlInsert,["A","aaa"]);
db.run(sqlInsert,["B","bbb"]);
db.run(sqlInsert,["C","ccc"]);
db.run(sqlInsert,["D","ddd"]);
```

##查詢
```javascript
var sqlSelect = "SELECT rowid AS id, name,remark FROM TABLENAME";
db.each(sqlSelect, function(err, row) {
  console.log(row.id + ": " + row.name + ":" + row.remark);
});
```

##修改
```javascript
var sqlUpdate="update TABLENAME set remark=? where name=?";
db.run(sqlUpdate,["J","D"]);
```

##刪除
```javascript
var sqlDelete = "delete from TABLENAME";  
db.run(sqlDelete);
```

###sqlite基本指令
```sqlite
SQL指令都是以;做結尾
--表示註解
.help求助
.quit離開
create table TABLENAME(one,two);                                --新增table
Insert into TABLENAME values('hello!',10);                      --新增資料
select * from TABLENAME;                                        --讀取資料
Update TABLENAME set one = 'hello world!' where one = 'hello!'; --修改資料
```
