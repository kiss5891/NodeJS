var moment = require('moment');

//utc()
var now = moment();
console.log(now.toString());							//顯示本地端時間
console.log(now.utc().toString());						//顯示UTC時區時間
console.log(now.utc().second());						//取得UTC時區秒針時間
now.utc().second(12);								//設定UTC時區秒針時間
console.log(now.utc().toString());						//顯示設定過後時間
console.log('------------------------------------');	

//get()&set()		
var days = moment();				
console.log(days.toString());							//顯示目前時間
days.set('days',2);								//設定星期為星期二
console.log(days.toString());							//顯示設定過後時間
console.log(days.get('days'));							//取得星期
console.log('------------------------------------');

//各種時間格式
console.log(moment("2016-12-11").toString());					//顯示2016年12月11日時間
console.log(moment("2016-W49-7").toString());					//顯示2016年第4週禮拜天時間
console.log(moment("2016-346").toString());					//顯示2016年第346天時間
console.log('------------------------------------');

//時間格式+時間
console.log(moment("2016-01-01T21").toString());				//加入時針設定
console.log(moment("2016-01-01 21").toString());				//加入時針設定
console.log(moment("2016-01-01 21:03").toString());				//加入時針分針設定
console.log(moment("2016-01-01 21:24:10.292").toString());			//加入時分秒設定
console.log(moment("2016-01-01 21+0900").toString());				//更改時差
console.log('------------------------------------');

//自訂格式
console.log(moment("2016-10-10 4:30","YYYY-MM-DD HH:mm").toString());		//顯示自訂格式時間
console.log(moment("2016-10-10 4:30 +0900", "YYYY-MM-DD HH:mm Z").toString());	//顯示自訂格式時間
console.log(moment("2016-10-10 4:30AM", "YYYY-MM-DD HH:mmA").toString());	//顯示自訂格式時間
console.log('------------------------------------');

//判斷時間是否正確
console.log(moment("2016-2-29","YYYY-MM-DD").isValid());			//正確的日期
console.log(moment("2015-2-29","YYYY-MM-DD").isValid());			//錯誤的日期
console.log(moment("2016-13-29","YYYY-MM-DD").isValid());			//錯誤的月份
console.log('------------------------------------');

//選擇符合的時間格式
console.log(moment("12-25-2016",["YYYY-MM-DD","MM-DD-YYYY"]).toString());	//顯示正確的時間格式
console.log('------------------------------------');

//時間戳記(顯示1970-1-1 0:0:0.000到現在時總秒數)
console.log(moment.unix(1318781876.721).format());				//顯示經過13億秒後的時間
console.log('------------------------------------');

//Array(順序為[year, month, day, hour, minute, second, millisecond])
console.log(moment([2016,3,1,15,25,50,152]).toString());			//顯示時間2016-4-1 15:25:50.152
console.log('------------------------------------');

//Object
console.log(moment({hour:15,minute:10}).toString());
console.log(moment({y:2012, M:11, d:21, h:12, m:12, s:12, ms:121}).toString()); //顯示時間2012-12-21 12:12:12.121
console.log('------------------------------------');

//使用format()顯示特別縮寫格式
console.log(now.format());							//顯示目前時間
console.log(now.format('LT'));							//h:mm A
console.log(now.format('LTS'));							//h:mm:ss A
console.log(now.format('L'));							//MM/DD/YYYY
console.log(now.format('l'));							//M/D/YYYY
console.log(now.format('LL'));							//MMMM D YYYY
console.log(now.format('ll'));							//MMM D, YYYY
console.log(now.format('LLL'));							//MMMM D YYYY LT
console.log(now.format('lll'));							//MMM D, YYYY LT
console.log(now.format('LLLL'));						//dddd, MMMM D YYYY LT
console.log(now.format('llll'));						//ddd, MMM D, YYYY LT

//------------------------------------------
/*執行結果
Sun Apr 03 2016 23:30:14 GMT+0800
Sun Apr 03 2016 15:30:14 GMT+0000
14
Sun Apr 03 2016 15:30:12 GMT+0000
------------------------------------
Sun Apr 03 2016 23:30:14 GMT+0800
Tue Apr 05 2016 23:30:14 GMT+0800
2
------------------------------------
Sun Dec 11 2016 00:00:00 GMT+0800
Sun Dec 11 2016 00:00:00 GMT+0800
Sun Dec 11 2016 00:00:00 GMT+0800
------------------------------------
Fri Jan 01 2016 21:00:00 GMT+0800
Fri Jan 01 2016 21:00:00 GMT+0800
Fri Jan 01 2016 21:03:00 GMT+0800
Fri Jan 01 2016 21:24:10 GMT+0800
Fri Jan 01 2016 20:00:00 GMT+0800
------------------------------------
Mon Oct 10 2016 04:30:00 GMT+0800
Mon Oct 10 2016 03:30:00 GMT+0800
Mon Oct 10 2016 04:30:00 GMT+0800
------------------------------------
true
false
false
------------------------------------
Sun Dec 25 2016 00:00:00 GMT+0800
------------------------------------
2011-10-17T00:17:56+08:00
------------------------------------
Fri Apr 01 2016 15:25:50 GMT+0800
------------------------------------
Sun Apr 03 2016 15:10:00 GMT+0800
Fri Dec 21 2012 12:12:12 GMT+0800
------------------------------------
2016-04-03T15:30:12+00:00
3:30 PM
3:30:12 PM
04/03/2016
4/3/2016
April 3, 2016
Apr 3, 2016
April 3, 2016 3:30 PM
Apr 3, 2016 3:30 PM
Sunday, April 3, 2016 3:30 PM
Sun, Apr 3, 2016 3:30 PM
*/
