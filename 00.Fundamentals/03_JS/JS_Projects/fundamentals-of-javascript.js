// Single-line comment: This is a basic JavaScript program

/*
Multi-line comment:
JavaScript Essentials:
1. Variables
2. Data Types
3. Functions
4. Loops
5. Conditionals
6. DOM Manipulation
*/

// 1. Variables
var myVar = "Hello, World!"; // 'var' is function-scoped, can be redeclared and updated
let myLet = 10; // 'let' is block-scoped, can be updated but not redeclared within the same scope
const myConst = 3.14; // 'const' is block-scoped, cannot be updated or redeclared

// 2. Data Types
let myString = "This is a string"; // String
let myNumber = 42; // Number
let myBoolean = true; // Boolean
let myArray = [1, 2, 3, 4, 5]; // Array
let myObject = { name: "Alice", age: 30 }; // Object

// 3. Functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Bob")); // Outputs: Hello, Bob!

// 4. Loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

// While loop
let j = 0;
while (j < 5) {
    console.log(`While loop iteration: ${j}`);
    j++;
}

// 5. Conditionals
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Switch statement
let day = 3;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

// 6. DOM Manipulation
// Assuming there is an element with id="myButton" in your HTML
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

// Creating a new element and appending it to the body
let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph created with JavaScript.";
document.body.appendChild(newElement);


// Single-line comment: This program demonstrates basic JavaScript concepts

/*
Multi-line comment:
This script covers:
1. Variables and Constants
2. Data Types
3. Functions
4. Control Structures
5. Loops
6. DOM Manipulation
7. Event Handling
*/

// 1. Variables and Constants
let name = "Alice"; // 'let' declares a block-scoped variable, can be updated but not redeclared
const age = 25; // 'const' declares a block-scoped constant, cannot be updated or redeclared

// 2. Data Types
let isStudent = true; // Boolean data type
let hobbies = ["reading", "cycling", "hiking"]; // Array data type
let address = { // Object data type
    street: "123 Main St",
    city: "Wonderland",
    zip: "12345"
};

// 3. Functions
// Function declaration
function greet(person) {
    // Template literals for string interpolation
    return `Hello, ${person}!`;
}
console.log(greet(name)); // Outputs: Hello, Alice!

// Function expression (anonymous function assigned to a variable)
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Outputs: 8

// Arrow function (ES6+ syntax)
const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // Outputs: 8

// 4. Control Structures
// If-else statement
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    default:
        console.log("Midweek day.");
        break;
}

// 5. Loops
// For loop
for (let i = 0; i < hobbies.length; i++) {
    console.log(`Hobby: ${hobbies[i]}`);
}

// While loop
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// 6. DOM Manipulation
// Assume there is an element with id="content" in the HTML
let contentElement = document.getElementById("content");
contentElement.textContent = "Hello, DOM!"; // Change text content of the element

// Creating and appending a new element
let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.body.appendChild(newElement);

// 7. Event Handling
// Assume there is a button with id="myButton" in the HTML
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

// This completes the basic overview of JavaScript concepts
