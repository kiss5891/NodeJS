#SQLite語法
##創建或載入資料庫
創建或載入一個名為databasename的db檔給主資料庫
```sql
$ sqlite3.exe databasename.db 								
sqlite> ATTACH DATABASE 'databasename.db' as 'databasename'  
```
釋放掉名為databasename的資料庫
```sql
sqlite> detach database 'databasename'						
$ sqlite3 databasename.db .dump > databasename.sql 			
$ sqlite3 databasename.db < databasename.sql 				
```
##創建表
創建一個表 (database_name可以不用)
``` sql
sqlite> CREATE TABLE database_name.table_name(				
sqlite> column1 datatype  PRIMARY KEY(one or more columns),	
sqlite> column2 datatype,									
sqlite> column3 datatype,
sqlite> .....
sqlite> columnN datatype,
sqlite> );
```
##刪除表
刪除tablename
``` sql
sqlite> DROP TABLE tablename;												
```
##Insert
```sql
sqlite> INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)]  
sqlite> VALUES (value1, value2, value3,...valueN);
```
或
```sql
sqlite> INSERT INTO TABLE_NAME VALUES (value1, value2, value3,...valueN);
```
把別的表載入
```sql
sqlite> INSERT INTO first_table_name [(column1, column2, ... columnN)] 
sqlite> SELECT column1, column2, ...columnN 
sqlite> FROM second_table_name
sqlite> [WHERE condition];
```
##select
如果column1=2就印出column1
```sql
sqlite> select column1 from tablename where column1=2 		
```
##Where 
條件
```sql

sqlite> select column1 from tablename where 	1=1		 		
```
可以用的條件方法
AND 多個條件同時達成

BETWEEN 值>=最小值或<=最大值的話就滿足條件

EXISTS 在where後面做的而外搜尋的值全部顯示

IN 只要等於IN ()裡面的值就TRUE

NOT	IN 只要等於IN ()裡面的值就FALSE

LIKE 字符等於LUKE()裡面的值就是TRUE   (%代表0~無限隨意字符 _代表1個隨意字符)

例如 "AAA"==LUKE("%A") ==LUKE("%_A") ==LUKE("___") ==LUKE("A%%") !=LUKE("B%%%") !=LUKE("__")

GLOB 跟LIKE類似，只是會分辨小寫。 (*代表0~無限隨意字符 ?代表1個隨意字符)

NOT 把後面的邏輯值反向

OR 只要達成一個條件就可

IS 跟=相似

||	把二個字串連起來

##update
滿足條件就把column1的值設為aaa
```sql
sqlite> UPDATE tablename SET column1 = 'aaa' WHERE 1=1;			
```
##delete
滿足條件就刪除
```sql
sqlite> DELETE FROM tablename WHERE 1=1;						
```

##LIMIT和OFFSET
第一個數字填提取的數量第二個填跳過得數量
```sql
sqlite> SELECT * FROM tablename LIMIT NUMBER OFFSET NUMBER			
```
##ORDER BY
以column1來排序 asc為升序 DESC為降序(預設降序)
```sql
sqlite> SELECT * FROM tablename ORDER BY column1 ASC;			
```
##GROUP BY
GROUP BY要放在ORDER BY前面

以column1的值來分組
```sql
sqlite> SELECT * FROM tablename GROUP BY column1;				
```
##HAVING
HAVING放在GROUP BY的後面 在ORDER BY前面

以column1的值來分組 分組完的滿足having條件才顯示
```sql
sqlite > SELECT * FROM tablename GROUP BY column1 HAVING 1==1;	

```
##DISTINCT
如果column1有重複的就只顯示一個
```sql
sqlite> SELECT DISTINCT column1 FROM tablename;						
```

##常用函数

COUNT 函数
執行的次數

MAX 函数
包含的值中最大的值

MIN 函数
包含的值中最小的值

AVG 函数
包含的值加起來取平均

SUM 函数
包含的值加起來

RANDOM 函数
做一個亂數是 -9223372036854775808 和 +9223372036854775807 之间的偽隨機整數。

ABS 函数
包含的值的絕對值

UPPER 函数
包含的英文字串轉全部變大寫

LOWER 函数
包含的英文字串轉全部變小寫

LENGTH 函数
包含的字符數量

sqlite_version 函数
sqlite的版本
