#SQLite語法
##創建或載入資料庫
創建或載入一個名為databasename的db檔給主資料庫
```sql
$sqlite3.exe databasename.db 								
sqlite>ATTACH DATABASE 'databasename.db' as 'databasename'  
```
釋放掉名為databasename的資料庫
```sql
sqlite>detach database 'databasename'						
$sqlite3 databasename.db .dump > databasename.sql 			
$sqlite3 databasename.db < databasename.sql 				
```
##創建表
創建一個表 (database_name可以不用)
``` sql
sqlite>CREATE TABLE database_name.table_name(				
sqlite>column1 datatype  PRIMARY KEY(one or more columns),	
sqlite>column2 datatype,									
sqlite>column3 datatype,
sqlite>.....
sqlite>columnN datatype,
sqlite>);
```
##刪除表
刪除tablename
``` sql
sqlite>DROP TABLE tablename;												
```
##Insert
```sql
sqlite>INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)]  
sqlite>VALUES (value1, value2, value3,...valueN);
```
或
```sql
sqlite>INSERT INTO TABLE_NAME VALUES (value1, value2, value3,...valueN);
```
把別的表載入
```sql
sqlite>INSERT INTO first_table_name [(column1, column2, ... columnN)] 
sqlite>SELECT column1, column2, ...columnN 
sqlite>FROM second_table_name
sqlite>[WHERE condition];
```
##select
如果column1=2就印出column1
```sql
sqlite>select column1 from tablename where column1=2 		
```
##Where 
條件
```sql

sqlite>select column1 from tablename where 	1=1		 		
```
可以用的條件方法
AND 运算符允许在一个 SQL 语句的 WHERE 子句中的多个条件的存在。

BETWEEN 运算符用于在给定最小值和最大值范围内的一系列值中搜索值。

EXISTS 运算符用于在满足一定条件的指定表中搜索行的存在。

IN 运算符用于把某个值与一系列指定列表的值进行比较。

NOT	IN 运算符的对立面，用于把某个值与不在一系列指定列表的值进行比较。

LIKE 运算符用于把某个值与使用通配符运算符的相似值进行比较。   (%代表0~無限 _代表1)

GLOB 运算符用于把某个值与使用通配符运算符的相似值进行比较。GLOB 与 LIKE 不同之处在于，它是大小写敏感的。(*代表代表0~無限 ?代表1)

NOT 运算符是所用的逻辑运算符的对立面。比如 NOT EXISTS、NOT BETWEEN、NOT IN，等等。它是否定运算符。

OR 运算符用于结合一个 SQL 语句的 WHERE 子句中的多个条件。

IS	NULL 运算符用于把某个值与 NULL 值进行比较。

IS 运算符与 = 相似。

IS NOT 运算符与 != 相似。

||	连接两个不同的字符串，得到一个新的字符串。

UNIQUE 运算符搜索指定表中的每一行，确保唯一性（无重复）。
##update
滿足條件就把colum1的值設為aaa
```sql
sqlite>UPDATE tablename SET colum1 = 'aaa' WHERE 1=1;			
```
##delete
滿足條件就刪除
```sql
sqlite>DELETE FROM tablename WHERE 1=1;						
```

##LIMIT和OFFSET
第一個數字填提取的數量第二個填跳過得數量
```sql
sqlite>SELECT * FROM tablename LIMIT NUMBER OFFSET NUMBER			
```
##ORDER BY
以colum1來排序 asc為升序 DESC為降序(預設降序)
```sql
sqlite> SELECT * FROM tablename ORDER BY colum1 ASC;			
```
##GROUP BY
GROUP BY要放在ORDER BY前面

以colum1的值來分組
```sql
sqlite> SELECT * FROM tablename GROUP BY colum1;				
```
##HAVING
HAVING放在GROUP BY的後面 在ORDER BY前面

以colum1的值來分組 分組完的滿足having條件才顯示
```sql
sqlite > SELECT * FROM tablename GROUP BY colum1 HAVING 1==1;	

```
##DISTINCT
如果colum1有重複的就只顯示一個
```sql
sqlite> SELECT DISTINCT colum1 FROM COMPANY;						
```

##常用函数

COUNT 函数
SQLite COUNT 聚集函数是用来计算一个数据库表中的行数。

MAX 函数
SQLite MAX 聚合函数允许我们选择某列的最大值。

MIN 函数
SQLite MIN 聚合函数允许我们选择某列的最小值。

AVG 函数
SQLite AVG 聚合函数计算某列的平均值。

SUM 函数
SQLite SUM 聚合函数允许为一个数值列计算总和。

RANDOM 函数
SQLite RANDOM 函数返回一个介于 -9223372036854775808 和 +9223372036854775807 之间的伪随机整数。

ABS 函数
SQLite ABS 函数返回数值参数的绝对值。

UPPER 函数
SQLite UPPER 函数把字符串转换为大写字母。

LOWER 函数
SQLite LOWER 函数把字符串转换为小写字母。

LENGTH 函数
SQLite LENGTH 函数返回字符串的长度。

sqlite_version 函数
SQLite sqlite_version 函数返回 SQLite 库的版本。
