// Function Declartion

function add(a, b) {
  return a + b;
}

console.log(add(10, 10)); //20

//Function Expression

let product = function (a, b) {
  return a * b;
};
console.log(product(20, 20));

//Arrow Function

let add1 = (a, b) => {
  return a + b;
};
console.log(add(5, 5));
//Function IIFE (Immediate invoke function expression)

(function (a, b) {
  console.log(a + b);
})(10, 10);
