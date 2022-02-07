// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 
console.log("Position with index 1 is: ", letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  
friends.push('Oma', 'Krishna', 'Alex');
console.log("friends Array: ", friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

// *** Using Lambda ***
const index = significantMathNumbers.findIndex(number => number === 1729);
console.log("Index of number 1729 is: " ,index);
console.log(significantMathNumbers[index]);
// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket
const diet2 = ['hamburger', 'soda', 'pizza'];
// using 'splice function and spread operator with three points for adding only values
console.log("Diet Array: " ,diet.splice(2,0,...diet2));



// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 


console.log("remove last element: ", diet.pop());
console.log(diet);


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

// using loop
const dinnerTray = [];
for(let i=0; i<diet.length;i++){
  dinnerTray[i] = diet[i];
}
console.log("For Loop to copy Array: " ,dinnerTray);

// using slice() function
const dinnerTray1 = diet.slice();
console.log("Slice() to copy Array: ", dinnerTray1);

// Using spread operator
const dinnerTray2 = [...diet]
console.log("Spread operator to copy Array: ", dinnerTray2);
// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

console.log("Every second value: ");
  for (i=1; i <= lettersExpanded.length-1; i+=2) {
    console.log(lettersExpanded[i]);
  }

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers


const filteredNum = numbers.filter((number) =>{
  if(number < 0 || number > 6){
    return number;
  }
  else{
    discardedNumbers.push(number);
  }
});
console.log("Numbers list: [5, 3, 2, 7, 11, 12, 0, -20, 6]");
console.log("filtered numbers, above 6 and below 0, are: ", filteredNum);
console.log("discarded numbers: ", discardedNumbers);
      
// --------------------------------------


