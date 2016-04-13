var math = require('mathjs');					//導入math函數進行數學運算

//常用四則運算
console.log(math.add(2,3));					//加法(2+3)
console.log(math.subtract(5,3));				//減法(5-3)
console.log(math.multiply(7,3));				//乘法(7*3)
console.log(math.divide(9,3));					//除法(9/3)
console.log(math.mod(8,3));					//取餘數(8%3,8mod3)
console.log(math.abs(-8));					//絕對值
console.log(math.sign([3,5,-2,0,2]));				//判斷正負號(正->1,負->-1,零->0)
console.log(math.unaryMinus([-9,7]));				//反轉正負號
console.log(math.ceil([3.2,3.8,-4.7]));				//最大整數
console.log(math.floor([3.2,3.8,-4.7]));			//最小整數
console.log(math.fix([3.2,3.8,-4.7]));				//無條件捨去
console.log(math.round(math.pi,3));				//四捨五入且取到小數點後第3位
console.log(math.square(2));					//二次方(2^2)
console.log(math.cube(2));					//三次方(2^3)
console.log(math.pow(2,4));					//乘冪(2^4)
console.log(math.sqrt(121));					//開根號
console.log(math.nthRoot(27,3));				//指定開幾次根號
console.log(math.exp(2));					//指數
console.log(math.log(1024,2));					//對數
console.log(math.log10(1000));					//固定10為底對數
console.log(math.gcd(25,15,-10));				//最大公因數
console.log(math.lcm(6,21,5));					//最小公倍數
console.log(math.unit('5 cm').value);				//以公尺為單位顯示大小
console.log(math.unit('5 m').value);				//以公尺為單位顯示大小
console.log(math.dotMultiply([3,2],[5,7]));			//矩陣乘法
console.log(math.dotDivide([9,8],[3,2]));			//矩陣除法
console.log(math.dotPow([[1,2],[3,4]],2));			//矩陣乘冪
console.log('---------------------------------------');

//關係運算
console.log(math.compare(2,[1,2,3]));				//比較大小(大:1,小:-1,等於:0)
console.log(math.equal(2+1,[1,2,3]));				//判斷是否相等(相等:true,不等:false)
console.log(math.unequal(2+1,[1,2,3]));				//判斷是否不等(相等:false,不等true)
console.log(math.larger(2,[1,2,3]));				//判斷是否大於
console.log(math.largerEq(2,[1,2,3]));				//判斷是否大於等於
console.log(math.smaller(2,3));					//判斷是否小於
console.log(math.smallerEq(2,[1,2,3]));				//判斷是否小於等於
console.log('---------------------------------------');

//統計運算
console.log(math.sum(2,1,4,3));					//總和
console.log(math.sum([[2,5],[4,3],[1,7]]));			//矩陣總和
console.log(math.max(2,1,4,3));					//取最大值
console.log(math.max([[2,5],[4,3],[1,7]]));			//矩陣取最大值
console.log(math.min(2,1,4,3));					//取最小值
console.log(math.min([[2,5],[4,3],[1,7]]));			//矩陣取最小值
console.log(math.mean(2,1,4,3));				//取平均值
console.log(math.mean([[2,5],[6,3],[1,7]]));			//矩陣取平均值
console.log(math.median(6,2,7));				//取中間數
console.log(math.median([3,-1,5,7]));				//偶數時取中間哪個數的平均
console.log('---------------------------------------');

//三角函數
console.log(math.sin(0.5));					//sin(x)
console.log(math.cos(0.5));					//cos(x)
console.log(math.tan(0.5));					//tan(x)
console.log('---------------------------------------');

//tools
console.log(math.to(math.unit('2 inch'),'cm').toString());	//將英吋轉為公分
console.log(math.clone('Hello world!'));			//複製
var isPositive = function(x){return x>0;}			//建立一個只回傳正數的函式
console.log(math.filter([6,-2,-1,4,3],isPositive));		//過濾掉負數
math.forEach([1,2,3],function(value){console.log(value);});	//依序執行
console.log(math.sort([5,1,10]));				//數字排序
console.log(math.sort(['C','A','D','B']));			//字母排序
var sortByLength = function(a,b){return a.length-b.length;};	//建立長度比較函式
console.log(math.sort(['English','Alex','GG'],sortByLength));	//使用長度排序
console.log(math.typeof(3.5));					//判斷型態
console.log(math.typeof('hello'));				//判斷型態
console.log(math.typeof(math.unit('5 cm')));			//判斷型態
console.log('---------------------------------------');

//字串處理
console.log(math.print('Nodejs is $age years old',{age:0}));	//將value帶入字串
console.log(math.print('pi is $pi',{pi:math.pi},10));		//限制將帶入字串的value長度
console.log('---------------------------------------');

//格式處理
console.log(math.format(2.1));					//正常輸出格式(2.1)
console.log(math.format(math.divide(1,3),3));			//限制顯示在小數點第三位(0.333)
console.log(math.format(31358,2));				//只顯示最前面2位數字(31000)
console.log(math.format(12.071,{notation:'fixed',precision:2}));//輸出整數且顯示小數點後2位
console.log(math.format(52.8,{notation:'exponential'}));	//輸出指數的數字

//---------------------------------------
/*
5
2
21
3
2
8
[ 1, 1, -1, 0, 1 ]
[ 9, -7 ]
[ 4, 4, -4 ]
[ 3, 3, -5 ]
[ 3, 3, -4 ]
3.142
4
8
16
11
3
7.3890560989306495
10
3
5
210
0.05
5
[ 15, 14 ]
[ 3, 4 ]
[ [ 1, 4 ], [ 9, 16 ] ]
---------------------------------------
[ 1, 0, -1 ]
[ false, false, true ]
[ true, true, false ]
[ true, false, false ]
[ true, true, false ]
true
[ false, true, true ]
---------------------------------------
10
22
4
7
1
1
2.5
4
6
4
---------------------------------------
0.479425538604203
0.8775825618903728
0.5463024898437905
---------------------------------------
5.08 cm
Hello world!
[ 6, 4, 3 ]
1
2
3
[ 1, 5, 10 ]
[ 'A', 'B', 'C', 'D' ]
[ 'GG', 'Alex', 'English' ]
number
string
Unit
---------------------------------------
Nodejs is 0 years old
pi is 3.141592654
---------------------------------------
2.1
0.333
31000
12.07
5.28e+1
*/
