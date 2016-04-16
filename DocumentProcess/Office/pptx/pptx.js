var fs = require('fs');						//導入fs模組
var officegen = require('officegen');				//導入officegen模組

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

pptx.generate(fs.createWriteStream('example.pptx'));	//產生一個.pptx檔
