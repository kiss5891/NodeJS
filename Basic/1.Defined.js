//本章將說明關於Defined的基礎操作
var a;                    //定義一個a
console.log(a);           //秀出a
a="value_A"               //給予a一個value_A的字串
console.log(a);           //秀出a
var b = "value_B";        //給予b一個value_B的字串
console.log(b);           //秀出b
console.log(c);           //秀出c
//---------------------------
/*執行結果
undefined
value_A
value_B
Error Msg
console.log(c);
            ^

var可以被省略的可是在ECMAScript 5版以後已經不支援隱式定義了所以必須要注意記得加上var
*/
