var now = new Date();
console.log(now);			//顯示目前時間()
console.log(now.getFullYear());		//顯示年份(四位數)
console.log(now.getMonth());		//顯示月份（0～11）
console.log(now.getDate());		//顯示日期（1～31）
console.log(now.getHours());		//顯示時針（0～23）
console.log(now.getMinutes());		//顯示分針（0～59）
console.log(now.getSeconds());		//顯示秒針（0～59）
console.log(now.getMilliseconds());	//顯示毫秒（0～999）
console.log(now.getDay());		//顯示星期（0～6,0為星期日）
console.log(now.getTimezoneOffset());	//顯示本地與UTC時差
console.log(now.getUTCFullYear());	//顯示UTC年份
console.log(now.getUTCMonth());		//顯示UTC月份
console.log(now.getUTCDate());		//顯示UTC日期
console.log(now.getUTCHours());		//顯示UTC時針
console.log(now.getUTCMinutes());	//顯示UTC分針
console.log(now.getUTCSeconds());	//顯示UTC秒針
console.log(now.getUTCMilliseconds());	//顯示UTC毫秒
console.log(now.getUTCDay());		//顯示UTC星期
console.log(now.toString());		//將Date物件轉為字串
console.log(now.toDateString());	//只轉換年月日星期
console.log(now.toISOString());		//使用ISO標準輸出字串
console.log(now.toJSON());		//使用JSON格式輸出字串
console.log(now.toLocaleDateString());	//轉換本地端年月日星期
console.log(now.toLocaleTimeString());	//轉換本地專時分秒
console.log(now.toLocaleString());	//把本地端時間轉為字串
console.log(now.toUTCString());		//顯示UTC時間
console.log(now.toTimeString());	//顯示GMT時間
console.log(now.valueOf());		//顯示Date物件真實數字

//----------------------------------
/*執行結果
Sat Apr 02 2016 21:46:11 GMT+0800 (CST)
2016
3
2
21
46
11
27
6
-480
2016
3
2
13
46
11
27
6
Sat Apr 02 2016 21:46:11 GMT+0800 (CST)
Sat Apr 02 2016
2016-04-02T13:46:11.027Z
2016-04-02T13:46:11.027Z
4/2/2016
9:46:11 PM
4/2/2016, 9:46:11 PM
Sat, 02 Apr 2016 13:46:11 GMT
21:46:11 GMT+0800 (CST)
1459604771027
*/
