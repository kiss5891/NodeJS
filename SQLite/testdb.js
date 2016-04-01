var fs = require("fs");
var file = "./test.db";

//載入 sqlite3
var sqlite3 = require("sqlite3").verbose();
//new 一個 sqlite 的 database，檔案是 test.db
var db = new sqlite3.Database(file);

db.serialize(function() {
  //db.run 如果 Staff 資料表不存在，那就建立 Staff 資料表
  db.run("CREATE TABLE IF NOT EXISTS  Stuff (thing TEXT)");
  var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");

  //寫進10筆資料
  for (var i = 0; i<10; i++) {
    stmt.run("staff_number" + i);
  }

  stmt.finalize();

  db.each("SELECT rowid AS id, thing FROM Stuff", function(err, row) {
    //log 出所有的資料
    console.log(row.id + ": " + row.thing);
  });
});

db.close();
