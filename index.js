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
var end=undefined
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

// 1.Single if Statement : 
// if(age>18){
//     console.log("You can vote for election");
// }

// 2.if - else Statement : 
// if(age>18){
//     console.log("You can vote for election");
// }else{
//     console.log("You cannot vote for election");
// }

// 3.if-elseif Ladder
// if(age>18){
//     console.log("Eligible for Drink..")
// }else if(age>50){
//     console.log("Not Good For Health..")
// }else if(age>65){
//     console.log("Time to spend time with family..")
// }else{
//     console.log("Death..")
// }

// console.log("End of Ladder..")


// Loops 
// for Loop: 
var arr=[11,12,13,14,15,16,17,18,19,20];
// for(var i=0 ; i<arr.length ; i++){
//     console.log(`Element at index ${i}:`,arr[i]);
// }

// forEach() Loop:

// arr.forEach(function(element){
//     console.log(element);
// })

// While Loop:
let j=0;

// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// break And continue Statement

// var arr1=[1,2,3,4,5,6,7,8,9,10];

// for ( var k = 0;k < arr1.length;k++) {
//     if(k==5){
//         // break;
//         continue
//     }
//     console.log(arr1[k]);
// }

// Array Methods 
let myArr=["Fan", "Car", null, true]
// console.log(myArr.length);
myArr.pop();
myArr.push("Piyush");
// console.log(myArr.toString());
myArr.shift();
myArr.unshift("Raj");
// console.log(myArr)

// String Method in JavaScript 
let Str="Hello Everyone, this is Prashant Kumar Upadhyay";
// console.log(str.length);
// Str+=" I am a Student of GLA University";
// console.log(Str.indexOf("Prashant"));
// console.log(Str.slice(0,4));
// console.log(Str.replace("Prashant","Piyush"))
// console.log(Str)


// Dates in JavaSript: 
let mydate=new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());

// DOM Manipulation

let elem = document.getElementById('btn');
// console.log(elem);

let elemClass = document.getElementsByClassName('container')
// console.log(elemClass);
// elemClass[0].style.background="yellow";


// console.log(elem.innerText);
// console.log(elem.innerHTML);

// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);


tn= document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText="This is a new paragraph which created by javaScript .";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText="This is bold";
tn[0].replaceChild(createdElement2,createdElement); 
// removeChild(Element)----> Remove an Element 

// Selecting using Query 
sel=document.querySelector('.container'); 
// console.log(sel);  // It shows only the element (class)
sel=document.querySelectorAll('.container');
// console.log(sel);  // It shows nodelist of Element (class)


function clicked(){
    console.log("The Button has Clicked..");
}

window.onload = ()=>{
    console.log("The Document has Loaded");
}
// Event in JavaScript : 

container.addEventListener('click' , ()=>{
    console.log("Button has Clicked..");
})

// container.addEventListener('mouseover' , ()=>{
//     console.log("Mouse on Container.");
// })

// container.addEventListener('mouseout' , ()=>{
//     console.log("Mouse out of Container.");
// })

// container2.addEventListener('mouseup' , ()=>{
//     console.log("Mouse up when clicked on Container");
// })

// container2.addEventListener('mouseup' , ()=>{
//     console.log("Mouse down when clicked on Container");
// })

