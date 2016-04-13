var moment = require('moment');

//使用fromNow()檢視輸入時間與現在時間相差多久
console.log(moment([2007,0,29]).fromNow());					//顯示輸入時間與現在時間相差多久
console.log(moment([2007,0,29]).fromNow(true));					//加入true去掉後綴詞
console.log('----------------------------------------------');

//使用from()比較兩個時間
var one = moment('2012-12-21');							//建立時間
var other = moment('2012-12-22');						//建立另一組時間
console.log(other.from(one));							//判斷other與one的相對時間
console.log(other.from(one,true));						//加入true去掉後綴詞
console.log('----------------------------------------------');

//使用diff()可指令比較的時間單位
var start = moment([2001,2,2]);							//使用array方式建立時間
var end = moment([2016,10,14]);							//使用array方式建立時間
console.log(end.diff(start,'years'));						//比較年份
console.log(end.diff(start,'months'));						//比較月份
console.log(end.diff(start,'weeks'));						//比較星期
console.log(end.diff(start,'days'));						//比較天數
console.log(end.diff(start,'hours'));						//比較時針
console.log(end.diff(start,'minutes'));						//比較分針
console.log(end.diff(start,'seconds'));						//比較秒針
console.log('----------------------------------------------');

//格式轉換
console.log(one._i);								//顯示原先格式
console.log(one.toArray());							//將格式轉換為array
console.log(one.toJSON());							//將格式轉換為JSON
console.log(JSON.stringify({							//將時間賽塞進JSON
	postDate : one.format()
}));
console.log('----------------------------------------------');

//使用繁體中文顯示時間				
var now = moment('2016-04-04');							//設定目前時間		
now.locale('zh-tw');								//轉換為繁體中文地區
console.log(now.format());							//顯示目前時間
console.log(now.format('dddd, MMMM Do YYYY, h:mm:ss a'));			//使用繁體中文顯示目前時間
console.log('----------------------------------------------');

//tools
//add()加法
var add = moment('2016-01-01');
console.log(add.format());							//顯示目前時間
console.log(add.add(7,'days').format());					//顯示增加7天後的時間
console.log(add.add(1,'days').add(2,'months').format());			//顯示增加2個月又1天後的時間	
console.log(add.add({days:1,months:1}).format());				//顯示增加1個月又1天後的時間
console.log('----------------------------------------------');

//subtract()減法
var subtract = moment('2016-12-31');
console.log(subtract.format());
console.log(subtract.subtract(3,'days').format());                           	//顯示減少3天後的時間
console.log(subtract.subtract(1,'days').subtract(2,'months').format()); 	//顯示減少2個月又1天後的時間    
console.log(subtract.subtract({days:1,months:1}).format());                     //顯示減少1個月又1天後的時間
console.log('----------------------------------------------');

//取得與設定時區
var t = moment();								//設定為目前時間
console.log(t.zone());								//顯示目前時區時差
console.log(t.zone(-8).format());						//設定時差為8小時
console.log(t.zone(-600).format());						//設定時差為600分鐘
console.log(t.zone('+09:00').format());						//設定時差為+09:00
console.log('----------------------------------------------');

//比較與查詢
console.log(moment('2014-11-11').isBefore('2014-11-15'));			//判斷前者是否早於後者
console.log(moment('2014-11-11').isBefore('2014-11-15','year'));		//只比較年份
console.log(moment('2014-11-11').isBefore('2015-11-15','year'));		//結果為true(2014早於2015)
console.log('----------------------------------------------');
console.log(moment('2014-11-11').isAfter('2014-11-15'));			//判斷前者是否晚於後者
console.log(moment('2014-11-11').isAfter('2015-11-15'));			//只比較年份(false)
console.log('----------------------------------------------');
console.log(moment('2014-11-11').isSame('2014-11-15'));				//判斷前後是否相同
console.log(moment('2014-11-11').isSame('2014-11-15','year'));			//只比較年份(true)
console.log('----------------------------------------------');
console.log(moment('2016-4-1').isLeapYear());					//判斷是否為閏年(true)
console.log(moment('2015-4-1').isLeapYear());					//判斷是否為閏年(false)
console.log('----------------------------------------------');
console.log(moment('2016-02','YYYY-MM').daysInMonth());				//顯示當月有幾天(29)
console.log(moment('2015-02','YYYY-MM').daysInMonth());				//顯示當月有幾天(28)

//---------------------------------------------------------------
/*執行結果
9 years ago
9 years
----------------------------------------------
in a day
a day
----------------------------------------------
15
188
819
5736
137664
8259840
495590400
----------------------------------------------
2012-12-21
[ 2012, 11, 21, 0, 0, 0, 0 ]
2012-12-20T16:00:00.000Z
{"postDate":"2012-12-21T00:00:00+08:00"}
----------------------------------------------
2016-04-04T00:00:00+08:00
星期一, 四月 4日 2016, 12:00:00 早上
----------------------------------------------
2016-01-01T00:00:00+08:00
2016-01-08T00:00:00+08:00
2016-03-09T00:00:00+08:00
2016-04-10T00:00:00+08:00
----------------------------------------------
2016-12-31T00:00:00+08:00
2016-12-28T00:00:00+08:00
2016-10-27T00:00:00+08:00
2016-09-26T00:00:00+08:00
----------------------------------------------
-480
2016-04-04T01:12:02+08:00
2016-04-04T03:12:02+10:00
2016-04-04T02:12:02+09:00
----------------------------------------------
true
false
true
----------------------------------------------
false
false
----------------------------------------------
false
true
----------------------------------------------
true
false
----------------------------------------------
29
28
*/

