var day = new Date().getDay();

switch (day){
  case 6:
    console.log('今天禮拜六放假喔');
  case 0:
    console.log('今天禮拜日放假喔喔喔喔');
  default:
    console.log('平日就是要做專案喔～');
};

//若遇到break則直接結束

switch (day){
  case 6:
    console.log('今天禮拜六放假');
  case 0:
    console.log('今天禮拜日放假');
  default:
    console.log('平日跟假日都要做專案');
};


switch (day){
  case 6:
    console.log('今天禮拜六朝爽得');
  case 0:
    console.log('今天禮拜日爽爽的');
    break;
  default:
    console.log('今天平日，懷疑喔');
};
