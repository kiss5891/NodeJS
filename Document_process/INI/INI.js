/*
INI為許多設定檔與參數檔的採用的儲存格式
*/
var fs = require('fs');								//導入fs模組
var ini = require('ini');							//導入ini模組

fs.readFile('1_example.ini','utf8',function(err,data){			//讀取檔案內容
	if(err){							
		throw err;							//拋出錯誤
	}
	var config = ini.parse(data);						//格式解析

	console.log(config);							//顯示檔案內容
	console.log(config.general.name);					//顯示檔案genral的name內容
	console.log(config.contact.phone[0]);					//顯示檔案contact的phone[0]內容

	fs.writeFile('2_example.ini',ini.stringify(config),function(err){	//將物件轉換為ini格式再寫入檔案
		if(err){
			throw errf;						//拋出錯誤
		}
		console.log("Saved");						//寫入成功後顯示訊息
	});
});

//----------------------------------------
/*執行結果
{ general: { name: 'Alex' },
  contact: 
   { email: 'abc@gmail.com',
     phone: [ '0987654321', '0912345678' ] } }
Alex
0987654321
Saved
*/
