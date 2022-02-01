// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result

// I have used the parseFloat() method
const sum = parseFloat(numberOne) + parseFloat(numberTwo);
console.log("Sum of the two numbers: ", sum);

// you cannot touch line 1 neither line 2


// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

// Used toFixed() function for two decimal conversion after parsing to float
const sumInTwoDecimal = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);
console.log("Sum in two decimal number: ", sumInTwoDecimal);

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const average = ((one + two + three) / 3).toFixed(5);
console.log("Average of three numbers: ", average);


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("character c, in variable letters, is index 2 => ", letters[2]);


// --------------------------------------
// Exercise 5 - Replace

let fact = "You are learning javascript!";

// capitalize the J in Javascript
fact = fact.toLowerCase().split(' ');
let factThree = fact[3][0].toUpperCase() + (fact[3].slice(1,))

console.log("capitalized j: ", factThree);
// --------------------------------------


