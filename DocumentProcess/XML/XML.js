/*
使用xml2js解析xml格式
*/
var xml2js = require('xml2js');			//導入可解析xml格式模組
var xml = '<root>Hello xml2js!</root>';		//定義一個xml格式

xml2js.parseString(xml, function(err,result){	//解析xml格式並轉換為javascript物件
	if(err){
		throw err;			//拋出異常
	}
	console.log(result);			//顯示轉換後結果
});

//--------------------------------
/*執行結果
{ root: 'Hello xml2js!' }
*/
var fs =require('fs');				//導入讀檔模組
var xml2 = fs.readFileSync('example.xml');	//讀取文件內容（內容會以函式返回值得形式返回）

xml2js.parseString(xml2, function(err,result){	//解析xml格式並轉換為javascript物件
	if(err){
		throw err;			//拋出異常
	}	
	console.log(result);			//顯示讀取內容轉換後結果
	console.log(result.products.item);	//顯示所有資訊
});

//--------------------------------
/*執行結果
{ products: { item: [ [Object], [Object] ] } }
[ { '$': { type: 'old' },
    name: [ 'Super Car' ],
    color: [ 'Blue' ],
    price: [ '100' ] },
  { '$': { type: 'new' },
    name: [ 'Fancy Car' ],
    color: [ 'Green' ],
    prince: [ '150' ] } ]

*/
