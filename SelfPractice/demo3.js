//if statement
let age = 18;
if (age >= 18) {
  console.log("Elegible for Vote");
}

//if...else statement
age = 17;
if (age >= 18) {
  console.log("Elegible for Vote");
} else {
  console.log("Not Elegible for Vote");
}

//else if ladder

let marks = 83;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//Nested-if
age = 20;
let hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    console.log("you can drive");
  }
}

//Switch Satement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Number");
}

//Ternary Operator
age = 23;
let result = age >= 23 ? "adult" : "Minor";
console.log(result);
