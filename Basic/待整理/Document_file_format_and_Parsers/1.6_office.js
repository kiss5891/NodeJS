/*
產生office文件檔（.docx,.pptx,.xlsx）
*/

//.docx
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

docx.generate(fs.createWriteStream('0.5_example.docx'));	//產生一個.docx檔

//-----------------------------------------------------

//.pptx
var pptx = officegen('pptx');					//使用officegen建立一個pptx格式文件
pptx.setDocTitle('A pptx title');				//設定標題

var slide = pptx.makeNewSlide();				//建立一個新的頁面

slide.back = '000000';						//設定背景顏色為黑色
slide.color = 'ffffff';						//設定字體顏色為白色

slide.addText('Hello World',{					//建立一個文字區塊
	x : 'c',						//設定x座標（c為系統自動置中）
	y : 'c',						//設定y座標（c為系統自動置中）
	cx : 600,						//設定文字區塊大小
	cy : 200,						//設定文字區塊大小
	color : 'ffff00',					//設定文字顏色
	bold : true,						//設定是否為粗體字
	underline : true,					//設定是否有底線
	font_face : 'Arial',					//設定字型為Arial
	font_size : 48						//設定字體大小
});

pptx.generate(fs.createWriteStream('0.6_example.pptx'));	//產生一個.pptx檔

//-----------------------------------------------------

//.xlsx
var xlsx = officegen('xlsx');					//建立一個Excel試算表
xlsx.name = "Just a excel";					//設定一個名稱			

var sheet = xlsx.makeNewSheet();				//建立一個新的表格

sheet.data[10]=[123];						//填入位子為A11
sheet.data[10][2] = 'Hello';					//只用陣列方式填入內容到表個
sheet.setCell('G8','World');					//使用指定欄位名稱方式填入內容

xlsx.generate(fs.createWriteStream('0.7_example.xlsx'));	//產生一個.xlsx檔
