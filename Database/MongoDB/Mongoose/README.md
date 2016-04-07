#mongoose 教學
--
##mongoose 介紹
mongoose 是一套給 Node.js 用的 MongoDB ODM，透過 mongoose 可以用包裝過的、更高階的、更直覺的 API 語法，以及模擬 SQL 資料庫 schema-based 的方式，來操作 MongoDB 資料庫。
--
##mongoose 的兩個概念：Schema 與 Model

MongoDB 是以 documents 為基礎，在 SQL 資料庫稱為 table 的東西，在 NoSQL 裡稱為 collection。當然，這又是一種名詞定義上的把戲，實質上大同小異。

###Schema

mongoose 的 Schema 概念就是用 schema-based 的方式，定義一個 collection 的組成結構
