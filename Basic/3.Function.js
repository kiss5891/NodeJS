var a=1;              //定義a
const B=2;            //增強定義B
function Fa(){
    console.log(a);   //秀出a的值
}
function FB(){        //創建一個名為FB的Function
    B=3;              //嘗試改變B的值
    console.log(B);   //秀出B的值
}
Fa();                 //執行Fa這個Function
FB();                 //執行FB這個Function
//----------------------
/*執行結果
1
2
*/
