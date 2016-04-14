//do...while 迴圈陳列式
//先執行迴圈內再判定是否繼續執行

var day = new Date().getDay();
var index = 0;
do{
  if (index == day){
    if (index == 0) {
      console.log('今天禮拜天');
    }
    else {
      console.log('今天是禮拜'+index);
    }
  }
  index++;

}while (index <= 7);
