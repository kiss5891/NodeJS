var fs = require('fs');						//導入fs模組
var officegen = require('officegen');				//導入officegen模組

var docx = officegen('docx');					//使用officegen建立一個docx格式文件
	
var p = docx.createP();						//使用cerateP()建立一個新的內容段落
p.options.align = 'center';					//設定為置中
p.addText('Hello World',{					//設定文字內容與文字風格
	color : 'ffff00',					//顏色特定為黃色
	bold : true,						//設定是否為粗體字
	underline : true,					//設定是否增加底線
	font_face : 'Arial',					//設定字型為Arial
	font_size : 48						//設定字體大小為48
});

docx.generate(fs.createWriteStream('example.docx'));	//產生一個.docx檔
