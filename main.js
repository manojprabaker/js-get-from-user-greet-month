
var c1=parseInt(prompt("enter the month"));
var a=new Date();
a.setMonth(c1);
var b=a.getMonth();

if(b<3)
{
	document.write("HeyIts Fall");
}
else if (b>=3 && b<7)
{
	document.write(" HeyIts Summer");
}
else if (7<=b && b<11)
{
	document.write("Its Winter");
}
else
	{
	document.write("Enter a valid month");
}

