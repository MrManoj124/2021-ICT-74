console.log("Hello Coding Wolrd");

let num1=60;
let num2=20;

var Addition=num1+num2;
var Substraction=num1-num2;
var Multiplication=num1*num2;
var Division=num1/num2;
console.log("Addition of num1 & num2 : "+Addition)
console.log("Substraction of num1 & num2 : "+Substraction)
console.log("Multiplication of num1 & num2 : "+Multiplication)
console.log("Division of num1 & num2 : "+Division)

for(var i=1; i<11; i++)
{
	console.log(i)
}


console.log(" ")


for(var i=1; i<10; i++)
{
	if(i%2==1)
	{
		console.log(i)
	}
}

console.log(" ")

var num=10;
while(num>0)
{
	console.log(num)
	num--
}

console.log(" ")


console.log("Reverse the numbers in left & right 4321-5-9876")
let mid = parseInt(9/2) + 1

for(let y=mid-1; y>=1; y--){
	console.log(y)
}
	
console.log("-" + mid + "-")
	
for(let z=9; z>mid; z--){
	console.log(z)
}