#mongoose 教學
--
##mongoose 介紹

#####mongoose 是一套給 Node.js 用的 MongoDB ODM，透過 mongoose 可以用包裝過的、更高階的、更直覺的 API 語法，以及模擬 SQL 資料庫 schema-based 的方式，來操作 MongoDB 資料庫。
--
##mongoose 的兩個概念：Schema 與 Model

MongoDB 是以 documents 為基礎，在 SQL 資料庫稱為 table 的東西，在 NoSQL 裡稱為 collection。當然，這又是一種名詞定義上的把戲，實質上大同小異。

###Schema

mongoose 的 Schema 概念就是用 schema-based 的方式，定義一個 collection 的組成結構，用程式碼描述會這樣子寫：
```JavaScript
var Schema = mongoose.Schema
var UserSchema = new Schema(
  {
    name:      { type: String },
    login:     { type: String, unique: true },
    email:     { type: String, unique: true },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  }
)
```
因為 MongoDB 是 schema-less 相當有彈性，所以如果上面這個 schema 某些「欄位」沒有賦值，那麼在 MongoDB 裡就不會有那個「欄位」。說「欄位」是 SQL 的思維，可是我覺得這樣講會比較好理解。

###Model

而 mongoose 的 Model 概念，則是對一個 collection 結構定義與操作方法的集合，也就是用 Schema 定義了一個 collection 的結構，加上其他對這個 collection 的驗證設定、操作方法等等，便構成了一個 Model。
結合剛剛的 schema 範例，可以再加上一些驗證跟操作的方法：
```JavaScript
UserSchema.pre('save', function(next) {
  // do something...
})

UserSchema.statics = {

  getUserByLogin: function(login, callback) {
    this.findOne({ login: login })
      .exec(callback)
  }

}
```
最後將這個 Schema 定義到一個叫做 User 的 model：
```JavaScript
mongoose.model('User', UserSchema)

```
當要使用這個 model 只要用 mongoose.model() 將 model 讀出來，便可以對他進行操作了：
```JavaScript
var User = mongoose.model('User')

User.getUserByLogin(login, function(err, user) {
  // here we have a user...
}
```
