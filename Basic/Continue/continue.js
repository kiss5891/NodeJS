//continue 陳述式

var list = [
  { id: 1,score: '30'},
  { id: 2,score: '40'},
  { id: 3,score: '50'},
  { id: 4,score: '87'}
];

for (var i in list) {
  var obj = list[i];
  if (obj.score >= 60){
    continue;
  }
  console.log('不及格['+obj.id+']:'+obj.score);
}
