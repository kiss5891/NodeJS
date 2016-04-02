/*
vsc紀錄資料的方式以列（row）為單位和資料庫一樣,一行可以有很多欄位
使用csv-parser模組解析csv檔案
*/
var fs = require('fs');				//導入讀檔模組
var csv = require('csv-parser');		//導入解析csv檔案模組

fs.createReadStream('0.4_example.csv')		//開啟csv檔案並建立資料流管道
	.pipe(csv())				//導入csv解析器
	.on('data',function(data){		//監聽data事件
		console.log(data);		//顯示讀取到的每一列資料
	});

//---------------------------
/*執行結果
Row { name: 'Alex', ' age': '22' }
Row { name: 'abc', ' age': '19' }
Row { name: 'cba', ' age': '30' }
*/
