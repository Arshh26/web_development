function add() {
  console.log(arguments);
}
add(10, 20, 30);

//Accessing individual parameters

function add1() {
  console.log(arguments[0]);
  console.log(arguments[1]);
}
add1("Arshad", 22);
