<a name="types"></a>
## 資料型態


  - `字串`
  - `數字`
  - `布林`
  - `null`
  - `陣列`
  - `物件` 
  - `函式`

    ```javascript
    var strApple = 'apple'
    var intYear = 24;
    var hasVal = true;
    var isVal = null;
    var arrStudent = ['Danny', 'Bill'];
    var objStudent = { name:'Danny', name:'Bill'}
    //es5
    var fnSum = function(x,y){
      return x + y;
    }
    //es6
   var fnSum = (x,y) => {
     return x + y 
     };
    ```
    
##方法

   - 
    ```js
    var compare = (a,b) => {
      return Math.sqrt( Math.pow(a,2) + Math.pow(b,2) );
    };
    console.log(compare(3,4));
    ```
    
##物件
  - 不要使用`const year = new Object();`這種方式來使用物件
  - 一個Object宣告** **必須包含有每個`{}`空間。
  - 如果宣告是多行，每行** **必須在結尾加上一個逗號，`包括最後一個`。
  - 如果宣告是不是多行，最後一個值**千萬不可在結尾加上逗號**。
  - 在一個物件的宣告，**每個key的冒號後方**，都必須加上`空白`。

  ```js
  // 正確寫法
  const obj = {};

  const obj = {
      camelCased: ...
  };

  const a = {
      k1: v1,
      k2: v2,
  };
  const b = { k1: v1, k2: v2 };
  const c = { k1: v2 };
  ```


##類別
  - 採用大駝峰方式來命名
  
##模組
  - 
  ```js
  function Person(name, age) {
      this.name = name;
      this.age = age;
  }
 
  Person.prototype.toString = function() {
      return '[' + this.name + ', ' + this.age + ']';
  };
 
  var p = new Person('Justin', 35);
 
  console.log(Person.prototype === Object.getPrototypeOf(p));   // true
```

##空白
 - 縮排使用`兩個空白`不要使用`Tab`
 - 在`逗點`的後方需加入`空白`不要相黏
 - 在 [ + - * / ^ ] 前後都必須加入`空白`
 - 如果有使用到小括弧`()`請記得在前後也加上空白

##單雙引號
 - 在宣告字串的時候必須都使用`單引號`
 - 在字串中會使用到JSON或是字串的話則使用`雙引號`
 
##逗號
 - 逗號的使用必須在後方加入空格
 - 並且使用逗號做變數宣告或是元素宣告中間不可間斷

##分號
 - 運算式的結束都必須加上`分號`表示運算式的結束

##註解
 - 一律在模組以及function開頭明確定義所需資料格式以及用途
 
 ```js
 /*openAuth.js
  *@module openAuth
  *@options JSON {name:str,password:str,authUrl:str}
 */
 function openAuth(options){
   this.name = options.name;
   this.password = options.password;
   this.authUrl = options.authUrl;
  }
  openAuth.prototype.getname = function(){
    console.log(this.name);
  };
  openAuth.prototype.getpassword = function(){
    console.log(this.password);
  };
  openAuth.prototype.getauthUrl = function(){
    console.log(this.authUrl);
  };
  openAuth.prototype.login = function(){
    console.log(this.authUrl);
  };
   ```




 