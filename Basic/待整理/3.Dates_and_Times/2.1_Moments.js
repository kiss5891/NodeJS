/*
由於Date物件只支援UTC與本地端兩個時區
所以可以使用moment模組解決多時區問題
也支援多種時間格式
*/

var moment = require('moment');			//導入moment模組

var now = moment();				//建立moment物件
console.log(now.format());			//顯示目前時間
console.log(now.toString());			//顯示目前時間

//取得&設定時間(皆使用同一個函數)
console.log(now.year());			//取得年份
now.year(2012);                                 //設定年份
console.log(now.toString());                    //顯示設定過後時間

console.log(now.month());            	        //取得月份(0~11)
now.month(11);                                 	//設定月份(0~11)
console.log(now.toString());                    //顯示設定過後時間

console.log(now.date());        	        //取得日期(1~31)
now.date(12);           	                //設定日期(1~31)
console.log(now.toString());                    //顯示設定過後的日期

console.log(now.hour());                     	//取得時針時間(0~23)
console.log(now.hours());                     	//取得時針時間(0~23)
now.hour(12);                                 	//設定時針時間(0~23)
now.hours(12);                           	//設定時針時間(0~23)
console.log(now.toString());                    //顯示設定過後時間

console.log(now.minute());                      //取得分針時間(0~59)
console.log(now.minutes());                     //取得分針時間(0~59)
now.minute(12);                                 //設定分針時間(0~59)
now.minutes(12);                                //設定分針時間(0~59)
console.log(now.toString());			//顯示設定過後時間

console.log(now.second());			//取得秒針時間(0~59)
console.log(now.seconds());			//取得秒針時間(0~59)
now.second(12);					//設定秒針時間(0~59)
now.seconds(12);				//設定秒針時間(0~59)
console.log(now.toString());			//顯示設定過後時間

console.log(now.millisecond());			//取得毫秒(0~999)
console.log(now.milliseconds());		//取得毫秒(0~999)
now.millisecond(12);				//設定毫秒(0~999)
now.milliseconds(12);				//設定毫秒(0~999)
console.log(now.millisecond());			//顯示設定過後的毫秒

console.log(now.toString());			//顯示目前設定時間
console.log(now.day());				//取得星期(0~6)
console.log(now.days());			//取得星期(0~6)
now.day('Sunday');				//使用字串更改星期
now.days(0);					//使用數字更改星期
console.log(now.toString());			//顯示更改過後的時間

console.log(now.dayOfYear());			//取得一年當中第幾天(1~366)
now.dayOfYear(1);				//設定為第一天
console.log(now.toString());			//顯示設定過後時間

console.log(now.weeks());			//取得一年當中的第幾個禮拜
now.weeks(2);					//設定為第二個禮拜
console.log(now.toString());			//顯示設定過後的時間

/*
第一季(1月~3月)
第二季(4月~6月)
第三季(7月~9月)
第四季(10月~12月)
*/
console.log(now.quarter());			//取得為第幾季
now.quarter(2);					//設定為第二季(4月~6月)
console.log(now.toString());			//顯示設定過後時間

//---------------------------
/*執行結果
2016-04-03T16:27:29+08:00
Sun Apr 03 2016 16:27:29 GMT+0800
2016
Tue Apr 03 2012 16:27:29 GMT+0800
3
Mon Dec 03 2012 16:27:29 GMT+0800
3
Wed Dec 12 2012 16:27:29 GMT+0800
16
16
Wed Dec 12 2012 12:27:29 GMT+0800
27
27
Wed Dec 12 2012 12:12:29 GMT+0800
29
29
Wed Dec 12 2012 12:12:12 GMT+0800
767
767
12
Wed Dec 12 2012 12:12:12 GMT+0800
3
3
Sun Dec 09 2012 12:12:12 GMT+0800
344
Sun Jan 01 2012 12:12:12 GMT+0800
1
Sun Jan 08 2012 12:12:12 GMT+0800
1
Sun Apr 08 2012 12:12:12 GMT+0800
*/
