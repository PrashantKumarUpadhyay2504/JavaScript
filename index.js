// Ways to printing into the javascript
// console.log("hello World");
// alert("Hello, World!!");
// document.write("This is Writing");

// Javascript console API
// console.log("Hello , World!");
// console.warn("This is a Warning ");
// console.error("This is an Error");

// JavaScript Variables:

var number1 = 45;
var number2 = 34;
// console.log(number1 + number2);

// Datatype in JavaScript
// Number
var num1= 34;
var num2= 55.89;

// String
var str= "this is a String";
var str1= 'this is also a String';

// Object
Marks={
    piyush:34,
    rajesh:45,
    Ram:67
}

// Boolean
var a=true;
var b=false;
// console.log(a,b);

// Undefined
// var end=undefined
var end;
// console.log(end);

// null
var c=null;
// console.log(c);

/*

At a very high level , there are two of data types in Javascript
1.Primitive Data types: undefined, null, number, String, boolean and symbol
2. References data types : Arrays and Objects

*/

var arr=[1,2,"String",5,6,true,4,5]
// console.log(arr);

// Operators in JavaScript
// 1. Arithmentic Operator : 

var a=23;
var b=98;

// console.log("The value of a + b",a+b);
// console.log("The value of a - b",a-b);
// console.log("The value of a * b",a*b);
// console.log("The value of a / b",a/b);
// console.log("The value of a % b",a%b);


// 2. Assignment Operator: 
// var num=2;
// console.log(num);
// num+=2;
// console.log(num);
// num*=3;
// console.log(num);
// num-=1;
// console.log(num);
// num%=5;
// console.log(num);
// num/=3;
// console.log(num);

// Comparision Operator : 
var x=34;
var y=80;

// console.log(x<=y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x>y);


// Logical Operator : 
// a) Or Operator Denoted by || 
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// b) And Operator Denoted by &&
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// c) not 
// console.log(!false);
// console.log(!true);

// function 

function averg(a, b){
    d=(a+b)/2;
    return d;
}
c1=averg(23,45);
c2=averg(78,43);
// console.log(c1,c2);

// Conditaional Statement : 
var age =34;
// Single if Statement : 
if(age>18){
    console.log("You can vote for election");
}

// if - else Statement : 
if(age>18){
    console.log("You can vote for election");
}else{
    console.log("You cannot vote for election");
}
