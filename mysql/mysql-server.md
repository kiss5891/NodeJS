# Mysql-Server

## 安裝mysql-server
```
sudo apt-get install mysql-server
```
會跳出畫面要求輸入root的密碼兩次
## 進入mysql
```
mysql -u root -p
```
然後會要求輸入一次密碼
## 建立資料庫
```
create database test;
```
test為資料庫名稱，可自行替換
## 使用資料庫
```
use test;
```
## 建立資料表
```
create table tablename(
id integer auto_increment primary key,
account char(50),
password char(50));
```
###其他常用指令
列出資料庫
```
show databases;
```
刪除資料庫
```
drop database (database);
```
列出資料表欄位訊息
```
describe (tablename);
```
修改資料表欄位
```
alter table (tablename)change column 原來欄位名稱 新欄位名稱資料型態;
```
新增資料表欄位
```
alter table (tablename) add column 欄位名稱 資料型態;
```
刪除資料表欄位
```
alter table (tablename) drop column 欄位名稱;
```
刪除資料表
```
drop table (tablename);
```
清空資料表(保留欄位名稱、結構)
```
truncate table 資料表名稱;
```
