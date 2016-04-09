#React Native

##安裝 
```bash
$ sudo npm install -g react-native-cli  //安裝react-native 
$ npm install react-web-cli -g          //安裝react-web
```

##初始化
```bash
$ mkdir ReactNative                 //建立專案資料夾
$ cd  ReactNative                   //進入資料夾
$ react-native init ProjectNmae     //初始化一个项目，其中 AwesomeProject 是项目名字ㄧ
$ mkdir web                         //建立網頁資料夾
$ react-web init '網頁專案名稱'     //初始化react-web
```

##index設置         //ReactNative/ProjectName/web/web/webpack.config.js
```bash
更改

var config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index.web'),       //更改入口文件
  },
};
```


##啟動web               //ReactNative/ProjectName/web/
```
$ vim index.web.js  
$ react-web start       //http://localhost:3000/
```
