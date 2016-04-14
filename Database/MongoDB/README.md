#mongodb

[教學PPT](http://slides.com/andy26283/mongodb/live#/)

#安裝

##匯入 10gen public GPG Key
```bash
  $ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
```

##將10gen加入apt-get的reposity來源
```bash
  $ sudo vim /etc/apt/sources.list.d/10gen.list

  加入 deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen
```

##更新apt-get
```bash
  $ sudo apt-get update
```

##安裝MongoDB
```bash
  $ sudo apt-get install mongodb-10gen
```

##如果要指定特定版本，例如2.2.3版，則使用
```bash
  $ apt-get install mongodb-10gen=2.2.3
```

##打開MongoDB
```bash
  $ sudo service mongodb start
```

##關閉MongoDB
```bash
  $ sudo service mongodb stop
```

##重起MongoDB
```bash
  $ sudo service mongodb restart
```

##解安裝MongoDB
```bash
  $ sudo apt-get remove mongodb* --purge
```

##新增資料庫
```bash
  > use DATABASE_NAME
```

##刪除現在正在使用的資料庫
```bash
  > db.dropDatabase()
```

##刪除TABLENAME這個collection(集合)
```bash
  > db.TABLENAME.dropDatabase()
```

##顯示目前使用資料庫的名字
```bash
  > db.getName()
```

##新增一個名字叫TABLENAME的collection(集合)，並寫入資料{name:Titan,age:”18”}
```bash
  > db.TABLENAME.insert({name:"Titan",age:"18"})
```

##顯示DATABASE_NAME這個資料庫內的所有collections
```bash
  (兩者其中一個)
  > show collectionsp
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
  (單一刪除)
  > db.TABLENAME.update({name:'Titan'},{'$unset':{phone:123}})
  (全部刪除)
  > db.TABLENAME.remove()
```

##刪除TABLENAME
```bash
  > db.TABLENAME.drop()
```

##結束
```bash
  > exit
```
