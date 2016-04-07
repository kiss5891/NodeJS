var readline = require('readline');						//導入readlin模組
var mongoose = require('mongoose');                                    		//導入mongoose模組
mongoose.connect('mongodb://localhost/mongoosetest');                   	//連結對應的資料庫：mongodb://localhost/mongoosetest

var db = mongoose.connection;                                           	//將資料庫賦值給"db"變數
db.on('error', console.error.bind(console, 'connection error:'));       	//db.on()"的第一個參數是資料庫>狀態。這裡代表當發生錯誤時，顯示相應訊息
db.once('open', function callback () {                                  	//"db.once()"，一旦資料庫狀態為
  console.log("連線成功");                                              	//這裡只在console顯示連結成功。
 
var rl = readline.createInterface(process.stdin, process.stdout);		//創建一個逐行讀取
	 var UserSchema = new mongoose.Schema({                                 //定義UserSchema為一個mongoose的架構
            name:String,                                                        //      其中架構為 name : String
        });                                                                     //
        var UserModel = db.model('User',UserSchema);                            //用UserSchema來產生一>個名(index)為"User"的Model並指定給變數UserModel
	rl.question("What is key's value?",function(answer2){			//預先提示 文字，用户應答后將其答案傳入內部function
		console.log("name : "+answer2);					//顯示
	        var userEntity = new UserModel({ name : answer2 });		//新增資料userEntity 
		userEntity.save()                          			//將資料上傳
		rl.close();							//
	})									//
})
