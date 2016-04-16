#格式
- 縮排

```javascript
/*
* 使用兩個空白來當作縮排不要使用Tab
* 因為Tab會因編譯器不同而造成排版雜亂
*/
var year = 2016 ;
if ( year === 2016 ){
  return year;
}
```
- 空格

```javascript
/*
* 小括弧()與運算式「 = - * / ^ 」前後都必須加上空白
*/
var sum = 0;
sum = 20 + 30 * ( 15 / 3 ) ; 
console.log(sum);
```

- 變數宣告

```javascript
/*
* 宣告嚴禁未使用var來做宣告
* 並且是每一行每個宣告都要加上var
*/
var strName = 'Danny';
var intYear = 25;
```
- 單雙引號

```javascript
/*
* JSON使用雙引號 ""
* 其餘使用單引號 ''
*/
var strName = 'Danny';
var intYear = 25;
var user = '{ "name": "John Chen", "age": 29 }';
```
- 括弧使用

```javascript
/*
* 開頭大括弧不必要換行
*/
if (20 > 1){
  console.log('20 > 1');
}
```
- 標點符號

```javascript
/*
* 逗號：逗號的後方必須加上一個空格
*/
var name = 'Danny', year = 25 ;
var user = { name: 'Danny', year: 25}

/*
* 分號：記得在方法以及任何陳述式的後方加上分號「;」
* 不要使用javascript自動加分號不然會非常不好除錯
*/
var name = 'Danny';
```

