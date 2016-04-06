/*
json在JavaScript以外的程式語言不易使用
如果將json格式轉換為二進位的形式更方便其他機器解析
所以可以使用msgpack模組包裝json成二進位(Binary)格式
*/
var msgpack = require('msgpack');		//導入msgpack函式庫

var Obj = {					//定義一個json
	name : "Alex",
	age : 22
}

var packedObj = msgpack.pack(Obj);		//將json包裝成二進位格式

console.log(packedObj);				//顯示json包裝後的二進位格式

var rawObj = msgpack.unpack(packedObj);		//解開包裝

console.log(rawObj);				//還原經過包裝的json
//-----------------------------------------
/*執行結果
<Buffer 82 a4 6e 61 6d 65 a4 41 6c 65 78 a3 61 67 65 16>
{ name: 'Alex', age: 22 }
*/
