//物建的coding Style要記得大駝峰(第一個字大寫)

var Obj ={x:3,y:4};                     //新增一個物件型態Obj在裡面放入{x:3,y:3}
console.log(typeof(Obj));               //秀出Obj目前的型態
console.log(typeof(Obj.x));             //秀出Obj物件底下的key為x的型態
console.log(Obj.x);                     //秀出Obj物件底下的key為x的Value值
//----------------------
/*執行結果
object
number
3
*/
var Obj2={num:{x:5,y:6}};               //新增一個物件型態Obj2在裡面放入{num{x:5,y:6}}
console.log(typeof(Obj2));              //秀出Obj2目前的型態
console.log(typeof(Obj2.num));          //秀出Obj2物件底下的key為num的型態
console.log(typeof(Obj2.num.x));        //秀出Obj2物見底下的key為num底下的key為x的型態
console.log(Obj2.num.x);                //秀出Obj2物見底下的key為num底下的key為x的Value
//----------------------
/*執行結果
object
object
number
5
*/
var Obj3={};                            //定義一個空物件Obj3
Obj3.f=function (a,b){ return a+b}      //在obj3裏面塞入一個為f的屬性 此屬性裏面放入一個匿名函式
console.log(Obj3.f(2,7));               //使用上面定義的Obj3.f來執行匿名函式
//----------------------
/*執行結果
9
*/

var Obj4=new Object();                  //定義一個空物件Obj4
console.log(typeof(Obj4));              //秀出Obj4的型態
//----------------------
/*執行結果
object
*/
