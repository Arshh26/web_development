var y;
console.log(y); //Undefined
greet(); //works correctly

function greet() {
  console.log("Hello");
}

console.log(x); //can't reference 'x' before initialization error
let x = 45;

console.log(a);
const a = 30; // Referecne error
