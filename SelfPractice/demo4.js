/* for loop
for loop method is used when a number of iteration is known in advance
 */

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

/*while loop
while loop executes the code as long as thee condition is true
*/

let j = 1; //initialisation
while (j <= 5) {
  //condition
  console.log(j);
  j++; //updation
}

/*do...while loop
do...while loop executes the loop body at least once even if the condition is false
it checks the condition after executing the loop body
*/

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

/* for...in loop
The for...in loop is used to iterate over the keys(property names) of an Object
*/

let student = {
  name: "Arshad",
  age: 22,
  city: "Sirsi",
};

for (let key in student) {
  console.log(key);
}

/* for...of loop
The for...of loop is used to iterate over the values of iterable Objects, such as Array and Strings
*/

let numbers = [10, 20, 30];
for (let value of numbers) {
  console.log(value);
}
