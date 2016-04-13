//break 陳列式

var day = new Date().getDay();
var index =  0;
while (index <= 7) {
  console.log('執行次數:'+index);
  if (index == day){
    if (index == 0){
      console.log('今天禮拜天');
      break;
    }
  else {
    console.log('今天禮拜'+index);
    break;
  }
}
index++;
}
