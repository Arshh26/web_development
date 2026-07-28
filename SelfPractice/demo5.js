/*forEach(): it executes a function once for every element in the array*/
var nums = [2, 3, 5, 8, 10, 22, 25, 28, 20, 30, 40, 50];

nums.forEach(function (value) {
  console.log(value);
});

/*map(): it creates a new array by applying the function on each element*/
let square = nums.map(function (value2) {
  return value2 * value2;
});
console.log(square);

/*filter(): it creates a new array containing only the elements that satisfy the condition*/

let numbers = nums.filter(function (value3) {
  return value3 % 2 === 0;
});
console.log(numbers);

/*find(): it returns the first element that matches the condition*/

let odd = nums.find(function (val) {
  return val % 2 != 0;
});
console.log(odd);

/*some(): the sum method returns true at least one element satifies the condition*/

console.log(nums.some((value) => value > 10));

/*every(): it return true if all elements are satisfies the condition*/

console.log(nums.every((a) => a < 100));
console.log(nums.every((a) => a > 60));

/*findIndex(): it returns the matching of the first matching element*/

console.log(nums.findIndex((a) => a % 2 != 0));

/*reduce(): it reduces all methods into a singlr value*/

console.log(
  nums.reduce(function (total, value) {
    return total + value;
  }, 0),
);

console.log(
  nums.reduce(function (a, b) {
    return a * b;
  }, 0),
);
