function People()                                      //創造一個People的物件
{
    this.name = "";                                    //物件的name = ""
    this.year = 0;                                     //物件的year = 0
};

People.prototype.setName = function(name)              //在People的物件增加 setName 的function
{
    this.name = name;                                  //物件的name = name
};
People.prototype.getName = function()                  //在People的物件增加 getName 的function
{
    return this.name;                                  //回傳物件的name
};

People.prototype.setYear = function(year)              //在People的物件增加 setYear 的function
{
    this.year = year;                                  //物件的year = year
};
People.prototype.getYear = function()                  //在People的物件增加 getYear 的function
{
    return this.year;                                  //回傳物件的year
};

var people = new People;                               //用people繼承People的物件
people.setName("kiss");                               
people.setYear(5891);
console.log("use function getName  " +  people.getName() );
console.log("use function getYear  "  + people.getYear() );
console.log("call name " + people.name);
people.name = "chm";
console.log("call name " + people.name);

