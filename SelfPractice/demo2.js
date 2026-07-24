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

let num = 1000000000000000000000000000000000000000000;
console.log(typeof num);
