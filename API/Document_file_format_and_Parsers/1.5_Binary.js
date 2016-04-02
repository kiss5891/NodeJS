/*
使用Buffer模組管理一塊記憶體並操作二進位資料
*/
var buffer = new Buffer(16);				//建立一個16Bytes大小的記憶體空間
var arrayBuffer = new Buffer([2,4,8,16,32,64,128,255]);	//使用陣列建立
var utf8Buffer = new Buffer('Hello World', 'utf8');	//指定編碼為utf8
var ascBuffer = new Buffer('Hello World', 'ascii');	//指定編碼為ascii

console.log(buffer);					//顯示記憶體空間內容
console.log(arrayBuffer);				//顯示記憶體空間內容
console.log(utf8Buffer);				//顯示記憶體空間內容
console.log(ascBuffer);					//顯示記憶體空間內容
console.log(arrayBuffer[0]);				//讀取特定的記憶體位子

//------------------------------
/*執行結果
<Buffer 70 f6 c1 02 00 00 00 00 d0 de 11 dd fd 7f 00 00>
<Buffer 02 04 08 10 20 40 80 ff>
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
2
*/
