var mongo = require('mongodb');										//加入mongodb的函式庫
var Server = mongo.Server;										//簡寫mongo.Server成Server
var Db=mongo.Db;												//簡寫mongo.Db成Db
	
var server = new Server('localhost',27017,{auto_reconnect:true});					//簡寫server成Server('localhost',27017,{auto_reconnect:true});
var db = new Db('test',server);										//在mongo裡新增test的資料庫並稱之為db

db.open(function(err,db){
    if(!err){
	    console.log("We are connected");
													//新增doc,doc2
		db.collection('users',function(err,collection){
		        var doc = {'first_name':'tom','last_name':'lai'};
			var doc2 = {'first_name':'tom_test','last_name':'lai_test'};
        	    collection.insert(doc);								
        	    collection.insert(doc2);			
		    });
													//修改	
		db.collection('users',function(err,collection){
		    var query_doc = {'first_name':'tom'};			 
		    collection.update(query_doc,{'$set':{'age':26}});					//修改query_doc
		});
													//刪除	
		db.collection('users',function(err,collection){ 
		    var query_doc = {'first_name':'tom_test'};
			collection.remove(query_doc);							//刪除query_doc
		});
													//搜尋並顯示
		db.collection('users',function(err,collection){
		    var query_doc = {'first_name':'tom'};
			collection.findOne(query_doc,function(err,item){
			 	console.log(item['first_name']);					//顯示item['first_name']
				console.log(item['last_name']);						//顯示item['last_name']
				console.log(item['age']);						//顯示item['age']
			 	console.log(item.first_name);						//顯示item.first_name
				console.log(item.last_name);						//顯示item.last_name
				console.log(item.age);							//顯示item.age
			});
		});
	}
});
