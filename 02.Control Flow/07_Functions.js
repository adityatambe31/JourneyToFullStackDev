//function is a block of code can be declared once and can be reused which performs specific tasks

// divides into small tasks and works on
//DRY - Dont repat yourself
//KISS - Keep it simple stupid

//simple function declaration
function greet() {
  console.log("hello from a full stack dev!");
}

// greet();

//with params...
function sayHello(name) {
  console.log(`Hello ${name}, welcome to full stack development journey`);
  console.log();
}

sayHello("adi");

//return keyword in function...
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(10, 20));

function myFunction(num1, num2) {
  return num1 * num2;
}
console.log(myFunction(2, 2));

//function expression
//storing a function in a variable

const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("adi");

//Callback function
//when we provide function as an argument to another function that is known as callback function

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});

showCallFunc();
//the inner function is called as callback function

function greet(name, cb) {
  console.log(`Hi ${name}`);
  cb();
}

function cb() {
  console.log(`It's a callback Function`);
}

greet("Aditya", cb);

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
