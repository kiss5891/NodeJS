function People()
{
    this.name = "";
    this.year = 0;
};

People.prototype.setName = function(name)
{
    this.name = name;
};
People.prototype.getName = function()
{
    return this.name;
};

People.prototype.setYear = function(year)
{
    this.year = year;
};
People.prototype.getYear = function()
{
    return this.year;
};

var people = new People;
people.setName("kiss");
people.setYear(5891);
console.log("use function getName  " +  people.getName() );
console.log("use function getYear  "  + people.getYear() );
console.log("call name " + people.name);
people.name = "chm";
console.log("call name " + people.name);

