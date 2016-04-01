//本結將解說如何定義一個function
var a=1;                  //定義a
const B=2;                //增強定義B
function Fa(){
    console.log(a);       //秀出a的值
}
function FB(){            //創建一個名為FB的Function
    B=3;                  //嘗試改變B的值
    console.log(B);       //秀出B的值
}
Fa();                     //執行Fa這個Function
FB();                     //執行FB這個Function
//----------------------
/*執行結果
1
2
*/
//本結將解說如何定義一個function並傳入型式參數
function sum(x,y){        //定義sum這個function並給予型式參數x與y
  return (x+y);           //回傳x+y的值
}
console.log(sum("1",2));  //呼叫sum這個function並傳入字串1與變數2

function sum2(z,w){       //定義sum2這個function並給予型式參數z與w
  return (Number(z)+w);   //將z轉型成Number型態
}
console.log(sum2("1",2)); //呼叫sum2這個function並傳入字串1與變數2
//----------------------
/*執行結果
12
3
*/
//本結將解說如何定義一個function並傳入型式參數 採用匿名函式的方式
var TestF1 = function (f,h){
  return (f+h);
}
console.log(TestF1(2,6));
//----------------------
/*執行結果
8
*/
