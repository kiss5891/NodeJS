/*
陣列一般有2種建立方式
一種是物件的方式建立陣列
另一種是使用json表達
*/

//使用物件的方式建立陣列
var name = new Array();					//建立一個空陣列
var name2 = new Array('Alex','Abc','QWE'); 		//建立一個有值得陣列
console.log("name:",name);				//顯示陣列內容
console.log("name2:",name2);				//顯示陣列內容

//使用json的方式建立物件i
var name3 = [];						//建立一個空陣列
var name4 = ['Alex','Abc','QWE'];			//建立一個有值得陣列
console.log("name3:",name3);				//顯示陣列內容
console.log("name4:",name4);				//顯示陣列內容

//取得陣列內容
console.log("name4[0]:",name4[0]);			//顯示陣列中第一筆資料
name4[0] = 'Tom';					//修改陣列中第一筆資料
console.log("Newname4:",name4);				//顯示修改過後的陣列

//新增與刪除
name4.push('Newguy');					//新增一筆資料到陣列中最後的位子
console.log("push:",name4);				//顯示新增資料後的陣列
name4.splice(1,1);					//從第二的元素開始刪除,總共刪除一筆
console.log("splice:",name4);				//顯示陣列中剩餘資料

//查詢
console.log("indexOf:",name4.indexOf('Newguy'));	//顯示特定資料於陣列中的位子
console.log("Length:",name4.length);			//顯示陣列長度

//--------------------------------------------
/*執行結果
name: []
name2: [ 'Alex', 'Abc', 'QWE' ]
name3: []
name4: [ 'Alex', 'Abc', 'QWE' ]
name4[0]: Alex
Newname4: [ 'Tom', 'Abc', 'QWE' ]
push: [ 'Tom', 'Abc', 'QWE', 'Newguy' ]
splice: [ 'Tom', 'QWE', 'Newguy' ]
indexOf: 2
Length: 3
*/
