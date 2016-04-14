//while 迴圈陳述式

var day = new Date().getDay();
var index = 0;
while (index < 7) {
  if (index == day){
    console.log('今天禮拜二');
  }else {
    console.log('今天禮拜'+index)
  }
  index++;
}
