var day = new Date().getDay();

if (day == 6) {
  console.log('今天禮拜六放假');
} else if (day == 0) {
  console.log('今天禮拜日放假');
} else {
  console.log('今天是1~5沒放假');
};


var day = new Date().getDay();

if (day == 6) {
  console.log('今天禮拜六放假');
} else if (day !=6) {
  console.log('今天不是禮拜六');
} else if (day == 0) {
  console.log('今天禮拜日放假');
} else {
  console.log('今天是1~5沒放假');
};

// 巢狀if判斷

var day = new Date().getDay();

if (day == 6) {
  console.log('今天禮拜六有放假');
  if (day !=0) {
    console.log('而且也肯定不是禮拜天');
  }
}else if (day == 0){
  console.log('今天禮拜天有放假');
}else {
  console.log('今天是平日所以沒放假哭哭喔');
};
