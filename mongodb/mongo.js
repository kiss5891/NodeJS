var mongo = require('mongodb');										//加入mongodb的函式庫
var Server = mongo.Server;										//簡寫mongo.Server成Server
var Db=mongo.Db;												//簡寫mongo.Db成Db
	
var server = new Server('localhost',27017,{auto_reconnect:true});					//簡寫server成Server('localhost',27017,{auto_reconnect:true});
var db = new Db('test',server);										//在mongo裡新增test的資料庫並稱之為db

db.open(function(err,db){
    if(!err){
	    console.log("We are connected");								//連線時顯示"We are connected"
	    
													//新增資料方程式
		db.collection('users',function(err,collection){						//├新增方程式(資料放在users資料表裡)	
		        var doc = {'first_name':'tom','last_name':'lai'};				//├	設定doc的值
			var doc2 = {'first_name':'tom_test','last_name':'lai_test'};			//├	設定doc2的值
        	    collection.insert(doc);								//├	將doc新增到mongo
        	    collection.insert(doc2);								//├	將doc2新稱到mongo
		    });											//└
		    
													//修改方程式	
		db.collection('users',function(err,collection){						//├新稱方程式(資料放在users資料表裡)
		    var query_doc = {'first_name':'tom'};			 			//├	設定query_doc的搜尋參數
		    collection.update(query_doc,{'$set':{'age':26}});					//├	將'$set':{'age':26}更新到資料庫的query_doc裡
		});											//└
		
													//刪除方程式	
		db.collection('users',function(err,collection){ 					//├新稱方程式(資料放在users資料表裡)
		    var query_doc = {'first_name':'tom_test'};						//├	設定query_doc的搜尋參數
			collection.remove(query_doc);							//├	刪除query_doc
		});											//└
		
													//搜尋方成式
		db.collection('users',function(err,collection){						//├新稱方程式(資料放在users資料表裡)
		    var query_doc = {'first_name':'tom'};						//├	設定搜尋參數，名為query_doc
			collection.findOne(query_doc,function(err,item){				//├	搜尋query_doc
			 	console.log(item['first_name']);					//├		顯示item['first_name']
				console.log(item['last_name']);						//├		顯示item['last_name']
				console.log(item['age']);						//├		顯示item['age']
			 	console.log(item.first_name);						//├		顯示item.first_name
				console.log(item.last_name);						//├		顯示item.last_name
				console.log(item.age);							//├		顯示item.age
			});										//├
		});											//└
	}
});
