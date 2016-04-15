var fs = require('fs');						//導入fs模組
var officegen = require('officegen');				//導入officegen模組

var xlsx = officegen('xlsx');					//建立一個Excel試算表
xlsx.name = "Just a excel";					//設定一個名稱			

var sheet = xlsx.makeNewSheet();				//建立一個新的表格

sheet.data[10]=[123];						//填入位子為A11
sheet.data[10][2] = 'Hello';					//只用陣列方式填入內容到表個
sheet.setCell('G8','World');					//使用指定欄位名稱方式填入內容

xlsx.generate(fs.createWriteStream('example.xlsx'));	//產生一個.xlsx檔
