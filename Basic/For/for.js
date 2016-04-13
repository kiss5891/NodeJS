//for迴圈陳述式

for (var i=0; i<7; i++){
  switch (i) {
    case 6:
      console.log("今天是假日有放假喔");
    case 0:
      console.log('今天是平日做專案喔');
    default:
      console.log('平日不是假日');
  }
}


//for..in 迴圈陳列式

var list = [
    {id: 1, score: '30'},
    {id: 2, score: '50'},
    {id: 3, score: '70'},
    {id: 4, score: '65'}
];
for (var i in list) {
  var obj = list[i];
  console.log(obj.id+':'+obj.score);
}

//取出一個list裡的元素

var list = [1,2,3,4];
for (var i in list) {
  console.log(list[i]);
}
console.log(list.length);
