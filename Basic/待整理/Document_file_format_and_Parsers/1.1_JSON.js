/*
使用fs模組讀取json檔案
*/
var fs = require('fs');									//導入Filesysten模組
				
fs.readFile('0.1_example.json','utf8',function(err,data){				//讀取0.example.json檔案中內容放進data
	if(err){										
		throw err;								//拋出錯誤
	}
	console.log(data);								//秀出讀取的資料內容
	console.log(JSON.parse(data));							//秀出將文字轉為json的檔案內容
	console.log(JSON.parse(data)["string"]);					//秀出json中key為string的value
	console.log(JSON.parse(data)["number"]);					//秀出json中key為number的value
	console.log(JSON.parse(data)["information"]);					//秀出json中key為information的value
	console.log(JSON.parse(data)["information"]["name"]);				//秀出json中key為information.name的value
	console.log(JSON.parse(data)["information"]["tel"][0]); 			//秀出json中key為information.tel[0]的value
	
	fs.writeFile('0.2_example.json',JSON.stringify(JSON.parse(data)),function(err){	//將物件轉換為文字後寫入檔案
		if(err){
			throw err;
		}
		console.log('Saved');							//寫入成功後顯示Saved
	});
});

//------------------------------
/*執行結果
{                                            
	"string" : "Linux",
        "number" : 1234,
        "information":{
        	"name" : "Alex",
                "age" : 22,
                "tel" :["0987654321","0412345678"]
	}
}

{ string: 'Linux',
  number: 1234,
  information: { name: 'Alex', age: 22, tel: [ '0987654321', '0412345678' ] } }
Linux
1234
{ name: 'Alex', age: 22, tel: [ '0987654321', '0412345678' ] }
Alex
0987654321
Saved
*/
