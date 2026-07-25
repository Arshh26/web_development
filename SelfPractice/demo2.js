let company = "OpenAI"; //this is a global variable
console.log(typeof company);

function display() {
  console.log(company);
}
display();

console.log(company); //it can be accessed  from anywhere

// Local Variable

function name() {
  let myName = "Arshad";
  console.log(myName);
}
name();

console.log(myName);

let age = 22;
console.log(typeof age);

let result = "10" - 5;
console.log(result);

console.log(typeof result); //String, because + opearator converts the numbers to string

let value = "10" - 5;
console.log(typeof value); // Number, Because - operator only works with numbers

let a = true + 1;
console.log(typeof a); // Number, because true value is 1. so, 1+1=2 2 is a number

// Number to String cconversion
let age = "22";
let num = Number(age);
console.log(typeof num);

// String to Number Conversion
let age3 = 22;
let str = String(age3);
console.log(typeof str);

//Using +Operator converting String to Number
let age4 = "23";
let str1 = +age4;
console.log(typeof str1); //Number

//Taking input from user Using prompt Method
let age5 = prompt("Please Enter Your Age");
console.log(age5);
console.log(typeof age5);

//Converting a user inserted value into Number
let age6 = Number(prompt("Enter your Age"));
console.log(age6);
console.log(typeof age6);

// Using Unary Operator: Adding Two Numbers
let value1 = +prompt("Enter a first Value");
let value2 = +prompt("Enter a second Value");
let sum = value1 + value2;
console.log(sum);
console.log(typeof sum);

// This coding is done just for my practical Knowledge, there is a variable name Overloading which can cause a error
