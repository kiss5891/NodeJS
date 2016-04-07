var mongoose = require('mongoose');					//導入mongoose模組
mongoose.connect('mongodb://localhost/mongoosetest');			//連結對應的資料庫：mongodb://localhost/mongoosetest

/*檢查資料庫是否連線--------------------------------------------------------------------------------------------------------------------------------*/

var db = mongoose.connection;						//將資料庫賦值給"db"變數
db.on('error', console.error.bind(console, 'connection error:'));	//db.on()"的第一個參數是資料庫狀態。這裡代表當發生錯誤時，顯示相應訊息
db.once('open', function callback () {					//"db.once()"，一旦資料庫狀態為"open"，執行callback()
  console.log("連線成功");						//這裡只在console顯示連結成功。
								//

/*設定基本架構,產生medel和使用方法-------------------------------------------------------------------------------------------------------------------*/

	var UserSchema = new mongoose.Schema({					//定義UserSchema為一個mongoose的架構
	    name:String,							//	其中架構為 name : String
	    age:Number								//		   age : Number
	});									//
									//Mongoose的Schema除了可以設定屬性(Attributes)之外也可以加入方法(Methods)。
	UserSchema.methods.speak = function(){					//新增method名為speak
		  console.log("使用method")					//	顯示"使用method"
		  console.log('My name is '+this.name);				//	顯示"name"
	}

	var UserModel = db.model('User',UserSchema);                            //用UserSchema來產生一個名(index)為"User"的Model並指定給變數UserModel
	var userEntity = new UserModel({name:'Zack'});   	                //新增UserEntity

	userEntity.speak();							//使用speak這個methods去顯示資料

/*新增資料並儲存------------------------------------------------------------------------------------------------------------------------------------*/

	var userEntity1 = new UserModel({name:'Andy',age:18});                  //新增UserEntity1
	var userEntity2 = new UserModel({name:'David',age:19});                 //新增UserEntity2
	userEntity.save(function(){console.log("save "+userEntity.name)});      //將資料儲存在資料庫
	userEntity1.save(function(){console.log("save "+userEntity1.name)});	//將資料儲存在資料庫
	userEntity2.save(function(){console.log("save "+userEntity2.name)});	//將資料儲存在資料庫

/*搜尋資料並顯示------------------------------------------------------------------------------------------------------------------------------------*/

	UserModel.findOne({'name':'David'}, function (err, docs) {
		console.log("搜尋資料並顯示年紀");
	  	console.log(docs.age);
	});


});
