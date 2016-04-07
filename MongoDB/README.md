#mongodb

```:Lbash
http://slides.com/andy26283/mongodb/live#/
```

##創建數據庫
```bash
  use DATABASE_NAME
```

##刪除目前數據庫
```bash
  db.dropDatabase()
```

##創建集合
```bash
  (兩種方法其中一種)
  db.createCollection(TABLENAME, OPTIONS)
  db.TABLENAME.insert({"name" : "yiibai"})
```
