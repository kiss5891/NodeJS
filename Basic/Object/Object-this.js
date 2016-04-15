function object()
{
    this.name = "chm"; 
    this.year = "87";
    this.rname = function() 
    {
        return this.name;
    };
    this.ryear = function() 
    {
        return this.year;
    };
    this.setName = function( name )
    {
        this.name = name
    };
    this.setYear = function( year )
    {
        this.year = year
    }

};

var o1 =  new object;
var o2 = new object;
var o11 = o1;
console.log("o1 " +  o1.rname() );
console.log("o1 " +  o1.ryear() );

console.log("o2 " +  o2.rname() );
console.log("o2 " + o2.ryear() );

o2.setName("kiss");
o2.setYear(5981);
console.log("o2 " + o2.rname() );
console.log("o2 " + o2.ryear() );

o1.setName("qwer");
console.log("o1 "+  o1.rname() );
console.log("o1 "+  o1.ryear() );

console.log("o11 " + o11.rname() );
console.log("o11 " + o11.ryear() );



