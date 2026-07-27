//In this we are looking for == operator, === Operator ,Logical Operators, Ternary Operator

//== Operator(Equality Operator/Loose Equality Operator)
// == Opeartor is also known as equality operator/ Loose Equality Operator
// it compare both values, and returns boolean data types (true/false)
// Js automatically does type casting(type coercian), when there is different datatype

console.log(100 == 100);

console.log(10 == "10");

console.log(true == 1);

console.log(false == 0);

console.log(null == undefined); //true, in loose equality operator both are treated as a same

/* === Operator 
it also known as Strict equality operator
it compared both values as well as both datatype
Type casting doesn't happen in this operator
*/

console.log(10 === 10); //true
console.log(10 === "10"); //false
console.log(true === 1); //false
console.log(false === 0); //false
console.log(null === undefined); //false, both are different datatypes

/* Logical Operators
Logical operator is used to combine and manipulate boolean expression 
it is mainly used with 
-> if statements
-> while loops 
-> conditional expression
*/

//Logical AND(&&) Operator
/* it is a operator it returns true if both consitions are true, else it return false*/

let age = 18;
let hasLicense = true;
console.log(age <= 18 && hasLicense); //true

/* Logical OR(||)
it is a operator it returns true if any one condition is true*/

let isAdmin = true;
let isManger = false;
console.log(isAdmin || isManager); //true

/* Logical NOT(!)
it is a operator it return reverse of booleans value
*/

let isLoggedIn = true;
console.log(!isLoggedIn); //false
