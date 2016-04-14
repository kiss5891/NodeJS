//with 陳述式無法在strict mode 使用
//主要是用來省略物件


var list = [
  { id: 1,score: '30'},
  { id: 2,score: '40'},
  { id: 3,score: '50'},
  { id: 4,score: '87'}
];


for (var i in list) {
  var obj = list[i];
  with  (obj){
    if (score >= 60){
      continue;
    }
    console.log('不及格['+id+']:'+score);
  }
}
