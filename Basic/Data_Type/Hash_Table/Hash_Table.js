/*
Hash Table是一個將所有已知狀態一對一給予key值
已利於下次搜尋狀態時只須搜尋key值使搜尋速度提昇
*/

//Hash Table
var HashTable = require('hashtable');		//導入建立雜湊表模組

var hashTable = new HashTable();		//建立一個雜湊表

hashTable.put('name','Alex');			//加入一組key/value配對的資料

console.log(hashTable.get('name'));		//顯示特定key的value

//--------------------------------------
/*
Alex
*/
