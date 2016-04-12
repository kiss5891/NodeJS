#Mysql
##Mysql-Server指令
在安裝完Mysql-Server後使用：
```bash
mysql -u root -p
```

###建立資料庫

輸入密碼後進入Mysql內，用下列指令顯示資料庫：
```bash
show databases;
```
這時可以看到有3個資料庫：
```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
+--------------------+
```
這3個資料庫為原本就有的預設資料庫

如果需要自己建立一個資料庫
```SQL
create database DATABASENAME;  
```
建立一個名為DATABASENAME的資料庫，名稱可自行更改，這時會出現
```
Query OK, 1 row affected
```
表示資料庫建立成功

如果需要確認可以再用一次show databases;
```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| DATABASENAME       |
| mysql              |
| performance_schema |
+--------------------+
```
剛剛建立的DATABASENAME已經建立完成了

###使用資料庫

在沒有選擇要使用的資料庫的情況下用：
```bash
connect;
```
會看到有一行為
```
Current database: *** NONE ***
```
表示目前沒有選擇要使用的資料庫

假如這時已經有了剛才建立的DATABASENAME這個資料庫，使用方式為：
```bash
use DATABASENAME;
```
或者是在一開始進入Mysql時將指令改為(資料庫需要先建立)：
```bash
mysql -u root -p DATABASENAME
```

再使用一次connect;
就可以看到
```
Current database: DATABASENAME
```
這樣就可以確定目前在使用的資料庫為剛剛建立的DATABASENAME了

###建立資料表

在選擇要使用的資料庫的情況下可以用下列欄位來顯示資料表
```bash
show tables;
```
假設目前的資料庫沒有任何資料表看到的結果會是：
```
Empty set
```

建立一個資料表的方法為：
```SQL
create table TABLENAME();
```
括號內可以設定欄位名稱和資料型態，常用的資料型態為：
####按照順序自動產生的編碼：
```
integer auto_increment primary key
```

####-2147483648~2147483647的數字(括號內的值為最大值，請自行設定):
```
int(MAXIMUN);
```

####1~255字元的字串(內容同上)：
```
char(MAXIMUM)
```

####不超過65535字元的字串(內容同上)：
```
varchar(MAXIMUM)
```

char 和 varchar 的比較請參照[這裡](http://dev.mysql.com/doc/refman/5.7/en/char.html)

假設我要建立一個有編號(ID)、帳號(ACCOUNT，假設長度最長為50)和密碼(PASSWORD，最長50)的資料表(TABLENAME)：
```SQL
create table TABLENAME(
ID integer auto_increment primary key,
ACCOUNT varchar(50),
PASSWORD varchar(50));
```
看到
```
Query OK, 0 rows affected
```
表示成功

這時再用一次show tables;會看到
```
+------------------------+
| Tables_in_DATABASENAME |
+------------------------+
| TABLENAME              |
+------------------------+
1 row in set
```
這表示剛剛建立的資料表已經成功了

###資料表的顯示、更動
假設我們並不知道table內有什麼內容的話可以使用
```bash
describe TABLENAME;
```
就可以看到TABLENAME內的內容：
```
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| ID       | int(11)     | NO   | PRI | NULL    | auto_increment |
| ACCOUNT  | varchar(50) | YES  |     | NULL    |                |
| PASSWORD | varchar(50) | YES  |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
```
如果有什麼需要更動的可以用以下指令：
####新增欄位
```SQL
alter table TABLENAME add column COLUMNNAME DATATYPE;
```

假設我要新增一個欄位名稱為TEXT，資料型態為char(20);
```SQL
alter table TABLENAME add column TEXT char(20);
```
TABLENAME的內容就會變更為
```
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| ID       | int(11)     | NO   | PRI | NULL    | auto_increment |
| ACCOUNT  | varchar(50) | YES  |     | NULL    |                |
| PASSWORD | varchar(50) | YES  |     | NULL    |                |
| TEXT     | char(20)    | YES  |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
```

####修改欄位
```SQL
alter table TABLENAME change column COLUMNNAME NEWCOLUMNNAME DATATYPE;
```

假設我要把TEXT改為NUMBER，型態為INT(20):
```SQL
alter table TABLENAME change column TEXT NUMBER int(20);
```
則TABLENAME的內容就會變成
```
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| ID       | int(11)     | NO   | PRI | NULL    | auto_increment |
| ACCOUNT  | varchar(50) | YES  |     | NULL    |                |
| PASSWORD | varchar(50) | YES  |     | NULL    |                |
| NUMBER   | int(20)     | YES  |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
```

####刪除欄位
```SQL
alter table TABLENAME drop column COLUMNNAME
```

如果有突然不想要的欄位的話：
```SQL
alter table TABLENAME drop column NUMBER;
```
TABLENAME的內容變為：
```
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| ID       | int(11)     | NO   | PRI | NULL    | auto_increment |
| ACCOUNT  | varchar(50) | YES  |     | NULL    |                |
| PASSWORD | varchar(50) | YES  |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
```

####刪除資料內容
```SQL
truncate table TABLENAME;
```
使用這個指令後TABLENAME內的資料會被清空，但是TABLENAME的結構會留著

####刪除資料表
```SQL
drop table TABLENAME;
```
使用這個指令之後TABLENAME這個table就刪除了，沒事請不要亂用

###資料內容的顯示、修改：
如果需要查看TABLE內的內容：
```SQL
select * from TABLENAME;
```

若資料表內沒有任何的資料的話會看到以下結果：
```
Empty set
```

####新增資料：
```SQL
insert into TABLENAME (COLUMNNAME1,COLUMNNAME2) values ("VALUE1","VALUE2");
```

如果想要新增資料：
```SQL
insert into TABLENAME (ACCOUNT,PASSWORD) values ("A1","PASS1");
```
新增資料欄位ACCOUNT為"A1"、欄位PASSWORD為"PASS1"

會出現
```
Query OK, 1 row affected
```
表示新增成功

這時使用select * from TABLNAME;
可以看到結果為：
```
+----+---------+----------+
| ID | ACCOUNT | PASSWORD |
+----+---------+----------+
|  1 | A1      | PASS1    |
+----+---------+----------+
```
ID為自行產生的，ACCOUNT是剛剛的"A1"，PASSWORD為"PASS1";
表示新增資料成功

####修改資料：
```SQL
update TABLENAME set COLUMNNAME1 = "VALUE1" , COLUMNNAME2 = "VALUE2" where COLUMNNAME="VALUE";
```

如果想要更改資料
```SQL
update TABLENAME set ACCOUNT = "AA" , PASSWORD="WORD" where ID = "1";
```
修改資料表在ID為"1"的條件下把ACCOUNT欄位內容改為"AA"，PASSWORD內容改為"WORD"
這時會顯示：
```
Query OK, 1 row affected
Rows matched: 1  Changed: 1  Warnings: 0
```
表示成功修改了一筆資料

而資料表的內容變成：
```
+----+---------+----------+
| ID | ACCOUNT | PASSWORD |
+----+---------+----------+
|  1 | AA      | WORD     |
+----+---------+----------+
```

####查詢資料：
```SQL
select COLUMNNAME,COLUMNNAME from TABLENAME where COLUMNNAME = "VALUE";
```

如果我想看某個特定內容：
```SQL
select ID,PASSWORD from TABLENAME where ACCOUNT="AA";
```
在TABLENAME裡面將欄位ACCOUNT的值為"AA"的ID和PASSWORD顯示出來：
```
+----+----------+
| ID | PASSWORD |
+----+----------+
|  1 | WORD     |
+----+----------+
```

####刪除資料
```SQL
delete from TABLENAME where COLUMNNAME1 = "VALUE1" and(or) COLUMNNAME2 = "VALUE2";
```

如果說我突然不想要這筆資料了：
```SQL
delete from TABLENAME where ACCOUNT = "AA" and PASSWORD = "WORD";
```
這樣就可以把這筆資料刪掉了，而資料庫內容就會變回Empty set

##Mysql for NodeJS
在使用
```bash
npm install mysql;
```
後可以在專案內建立js檔，繼續使用剛剛建立的資料庫

###顯示資料表內容
首先先建立一個可以連到資料庫和查詢資料表內容的檔案叫作CONNECTTEST.js
檔案內容為:
```javascript
var mysql      = require('mysql');                    //載入模組
var connection = mysql.createConnection({             //建立連線
  host     : 'localhost',                             //mysql伺服器位置
  user     : 'root',                                  //mysql使用者名稱
  password : 'user',                                  //mysql使用者密碼
  database : 'DATABASENAME'                           //使用的資料庫
});

connection.connect();                                 //開始連線

connection.query('SELECT * from TABLENAME'            //mysql語法，從TABLENAME內查詢類容
  ,function(err, rows) {                              //如果有錯誤內容就會存在err內，查詢結果會放在rows裡
    if (!err)                                         //如果查詢沒有錯誤                              
      console.log(rows);                              //顯示出查詢結果
    else
      console.log(err);                               //如果錯誤則顯示錯誤內容
});

connection.end();                                     //結束連線
```
之後執行這個檔案
```bash
node CONNECTTEST.js
```
如果沒有內容的話會顯示：
```
[]
```
表示這個資料表的內容目前是空的

###新增資料
建立一個檔案為INSERT.JS，檔案內容為
```javascript
var mysql      = require('mysql');                                              //載入模組
var connection = mysql.createConnection({                                       //建立連線
  host     : 'localhost',                                                       //mysql伺服器位置
  user     : 'root',                                                            //mysql使用者名稱
  password : 'user',                                                            //mysql使用者密碼
  database : 'DATABASENAME'                                                     //使用的資料庫
});

connection.connect();                                                           //開始連線

connection.query(                                                               //新增
  "insert into `TABLENAME` (`ACCOUNT`,`PASSWORD`) values ('AA','PASS1')"        //mysql語法新增欄位ACCOUNT值為AA，欄位PASSWORD值為PASS1到資料表TABLENAME
  ,function(err){                                                               //如果有錯誤內容就會存在err內
    if(err){                                                                    //如果錯誤
        console.log(err);                                                       //顯示錯誤內容
        throw error;
    }
});

connection.end();                                                               //結束連線
```

執行
```bash
node INSERT.js
```
如果沒有錯誤的話可以執行剛剛的CONNECTTEST.js，會看到：
```
[ RowDataPacket { ID: 1, ACCOUNT: 'AA', PASSWORD: 'PASS1' } ]
```
表示新增成功

###修改資料
建立一個檔案為UPDATE.js，內容為：
```javascript
var mysql      = require('mysql');                                                //載入模組
var connection = mysql.createConnection({                                         //建立連接
   host     : 'localhost',                                                        //mysql伺服器位置
   user     : 'root',                                                             //mysql使用者名稱
   password : 'user',                                                             //mysql使用者密碼
   database : 'DATABASENAME'                                                      //使用的資料庫
 });

connection.connect();                                                             //開始連接

connection.query(                                                                 //修改
  "update `TABLENAME` SET `ACCOUNT`='A1',`PASSWORD`='WORD' where `ACCOUNT`='AA'"  //mysql語法，將欄位ACCOUNT的值為"AA"的地方變更欄位ACCOUNT的值為"A1"，欄位PASSWORD的值變更為"WORD"
  ,function(err){                                                                 //如果有錯誤內容就會存在err內
   if(err){                                                                       //如果錯誤
       console.log(err);                                                          //顯示錯誤內容
       throw error;
   }
});

connection.end();                                                                 //結束連線
```

執行這個檔案
```bash
node UPDATE.js
```
沒有錯誤的話可以在職行CONNECTTEST.js查看內容：
```
[ RowDataPacket { ID: 1, ACCOUNT: 'A1', PASSWORD: 'WORD' } ]
```
這表示成功修改了資料內容

###查詢資料
建立檔案INQUIRE.js，內容為：
```javascript
var mysql      = require('mysql');                                                  //載入模組
var connection = mysql.createConnection({                                           //建立連線
  host     : 'localhost',                                                           //mysql伺服器位置
  user     : 'root',                                                                //mysql使用者名稱
  password : 'user',                                                                //mysql使用者密碼
  database : 'DATABASENAME'                                                         //使用的資料庫
});

connection.connect();                                                               //開始連線

connection.query('select `ID`,`PASSWORD` from `TABLENAME` where `ACCOUNT`="A1"'     //mysql語法，從TABLENAME內查詢欄位ACCOUNT值為"A1"的欄位ID內容和欄位PASSWORD內容
  ,function(err, rows) {                                                            //如果有錯誤內容就會存在err內，查詢結果會放在rows裡
    if (!err)                                                                       //如果查詢沒有錯誤                              
      console.log(rows);                                                            //顯示出查詢結果
    else
      console.log(err);                                                             //如果錯誤則顯示錯誤內容
});

connection.end();                                                                   //結束連線
```

執行檔案
```bash
node INQUIRE.js
```
會看到結果為：
```
[ RowDataPacket { ID: 1, PASSWORD: 'WORD' } ]
```

###刪除資料
建立檔案DELETE.js內容為：
```javascript
var mysql      = require('mysql');                         //載入模組
var connection = mysql.createConnection({                  //建立連線
  host     : 'localhost',                                  //mysql伺服器位置
  user     : 'root',                                       //mysql使用者名稱
  password : 'user',                                       //mysql使用者密碼
  database : 'DATABASENAME'                                //使用的資料庫
});

connection.connect();                                      //開始連線

connection.query("delete from `TABLENAME` where `ID`='1'"  //mysql語法，從TABLENAME將欄位ID的值為"1"的資料刪除
  ,function(err) {                                         //如果有錯誤內容就會存在err內
    if(err)                                                //如果錯誤
      console.log(err);                                    //顯示錯誤內容
});

connection.end();                                          //結束連線
```

執行
```bash
node DELETE.js
```
這樣剛剛的那筆資料就不見了，如果再用執行一次CONNECTTEST.js的話就會變回空的內容：
```
[]
```
