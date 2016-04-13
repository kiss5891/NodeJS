var now = new Date();											//設定now為目前時間

//設定年份
console.log('更改年份');
console.log(now.toString());										//顯示目前時間
var NewYear = new Date().setFullYear(2020);								//設定年份
console.log(new Date(NewYear).toString());								//顯示修改年份過後的時間

//設定月份
console.log('更改月份');
console.log(now.toString());										//顯示目前時間
var NewMonth = new Date().setMonth(7);									//設定月份
console.log(new Date(NewMonth).toString());								//顯示修改月份過後的時間

//設定日期
console.log('更改日期');			
console.log(now.toString());										//顯示目前時間
var NewDate = new Date().setDate(14);									//設定日期
console.log(new Date(NewDate).toString());								//顯示修改日期過份的時間

/*
Date()可一次設定所有時間(設定時年月日一定要輸入),格式如下
new Date(年,月,日,時,分,秒,毫秒)
*/

//設定時分秒毫秒
console.log('更改時間');
console.log(now.toString());										//顯示目前時間
var newTime = new Date(now.getFullYear(),now.getMonth(),now.getDate(),10,17,35,192);			//設定時間
console.log(new Date(newTime).toString());								//顯示修改時間過後的時間

//自行設計時間顯示格式
var months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];	
var weekdays = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六',]
console.log('自行設計格式');
console.log(now.toDateString());									//只顯示日期年月日
console.log(now.getFullYear()+'年'+months[now.getMonth()]+now.getDate()+'日'+weekdays[now.getDay()]);

//-----------------------------------------------
/*
更改年份
Sat Apr 02 2016 22:33:16 GMT+0800 (CST)
Thu Apr 02 2020 22:33:16 GMT+0800 (CST)
更改月份
Sat Apr 02 2016 22:33:16 GMT+0800 (CST)
Tue Aug 02 2016 22:33:16 GMT+0800 (CST)
更改日期
Sat Apr 02 2016 22:33:16 GMT+0800 (CST)
Thu Apr 14 2016 22:33:16 GMT+0800 (CST)
更改時間
Sat Apr 02 2016 22:33:16 GMT+0800 (CST)
Sat Apr 02 2016 10:17:35 GMT+0800 (CST)
自行設計格式
Sat Apr 02 2016
2016年4月2日星期六
*/
