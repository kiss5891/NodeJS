								//寫檔函數
var fs = require('fs');
								//資料庫位置
var file = './test.db';
								//sqlite函數
var sqlite3 = require('sqlite3').verbose();

//建立連線
var db =new sqlite3.Database(file);
db.serialize(function(){
db.run('CREATE TABLE IF NOT EXISTS table01(name TEXT,remark TEXT)');

								//創檔
	var mkf = 'INSERT INTO table01(name,remark) VALUES (?,?)';
	db.run(mkf,['John','aaa']);
	db.run(mkf,['May','bbb']);
	db.run(mkf,['Terry','ccc']);
	db.run(mkf,['Kevin','ddd']);	
	
								//搜尋
	var search = 'SELECT rowid AS id,name,remark FROM table01';
	db.each(search, function(err,row){
		console.log(row.id+':'+row.name);
	});
	
								//更新
	var upd = 'update table01 set name = ? where name =?';
	db.run(upd,['LuLu','Kevin']);
//----------------------------------------------------------------------------
								//搜尋與更新
	var serup ='SELECT rowid AS id, name,remark FROM table01 where name=?';
	db.each(serup,'LuLu',function(err,row){
		console.log('change'+row.id+'sussece');
		console.log(row.id+':'+row.name);
	});
	//delete
	//var sql04 = 'delete from table01 where name  = ? ';	
	//db.run(sql04,['*']);
	
});
//----------------------------------------------------------------------------
db.serialize(function(){
								//刪除
        var del = 'delete from table01 where name  = ?'  ; 
	
	//While(table01(id) == null){
		db.run(del,['LuLu']);
	
	//}

});
//--------------------------------------------------------------------------
								//刪除資料表
db.serialize(function(){
	var drop1 = 'DROP TABLE table01';
	db.run(drop1);
}); 
//-------------------------------------------------------------------------
								//結束連線
db.close();
