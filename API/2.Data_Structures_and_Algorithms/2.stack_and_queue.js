/*
stack : LIFO(先進後出)
queue: FIFO(先進先出)
*/

var english = [];				//建立一個空陣列

//依序新增資料
english.push('A');				
english.push('B');
english.push('C');
english.push('D');
english.push('E');

console.log(english);				//新增資料過後的陣列

//stack
var first = english.pop();			//pop()會先取得陣列中最後新增的元素,然後加以刪除
console.log(first);				//顯示使用pop（）取出元素
console.log(english);				//顯示被取走元素後的陣列

//quere
var first = english.shift();			//shift會先取得陣列中最先加入的元素,然後加以刪除
console.log(first);				//顯示使用shift取出的元素
console.log(english);				//顯示被取走元素後的陣列

//--------------------------------
/*執行結果
[ 'A', 'B', 'C', 'D', 'E' ]
E
[ 'A', 'B', 'C', 'D' ]
A
[ 'B', 'C', 'D' ]
*/
