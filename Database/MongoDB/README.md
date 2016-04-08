#mongodb

[教學PPT](http://slides.com/andy26283/mongodb/live#/)

##新增資料庫
```bash
  > use DATABASE_NAME
```

##刪除現在正在使用的資料庫
```bash
  > db.dropDatabase()
```

##顯示目前使用資料庫的名字
```bash
  > db.getName()
```

##新增一個名字叫TABLENAME的collection到friend這個資料庫，並寫入資料{name:Titan,age:”18”}
```bash
  > db.TABLENAME.insert({name:"Titan",age:”18”})
```

##刪除TABLENAME這個collection
```bash
  > db.TABLENAME.dropDatabase()
```

##顯示DATABASE_NAME這個資料庫內的所有collections
```bash
  (兩者其中一個)
  > show collections
  > db.getCollectionNames()
```

##讀取TABLENAME這個collection內的所有資料
```bash
  (兩者其中一個)
  > db.TABLENAME.find()
  > db.TABLENAME.find().pretty()
```

##在TABLENAME這個collection內的name:Titan後加入一個新的欄位，內容為phone:123
```bash
  > db.TABLENAME.update({name:'Titan'},{'$set':{phone:123}})
```

##在TABLENAME這個collection內刪除一個內容為phone:123的欄位
```bash
  > db.TABLENAME.update({name:'Titan'},{'$unset':{phone:123}})
```
