//In this we are looking for == operator and === Operator

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
