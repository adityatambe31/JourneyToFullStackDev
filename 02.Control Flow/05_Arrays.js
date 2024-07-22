//Arrays
let fruits = ["mango", "banana", "grapes"];

// empty array
let Names = [];
console.log(Names);

console.log(fruits);

//Accessing Items from Array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Nested array Or also known as two dimension array
const nestArr = ["one", ["two", "four"]];

console.log(nestArr[1][0]);

let favSinger = ["Charlie", "Atif", "Arijit"];

console.log(favSinger);

let favNum = [11, 7, 31];

let mixArr = ["string", ["otherarray", 123, true]];

console.log(mixArr);
console.log(mixArr[(1, 0)]);
console.log(mixArr[(2, 1)]);
console.log(mixArr[(3, 2)]);

//basic array methods

//concat() - joins two arrays
//includes() - check if array contains specific element or not

// push() adds element to end

//unshift() add element to the beginning

//pop() - removes element from last of array
//shift() - removes first element of array

// sort() - sort the elements in alphabetically  in sort ascending

//slice() - cut into two parts

//splice() - remove or replace from the existing ones

fruits = ["apple", "orange", "grape", "starwbarries", "gauva"];

fruits.push("banana"); //added at the end
console.log(fruits);

fruits.pop(); // banana removed
console.log(fruits);

fruits.shift(); //removes 1st elements
console.log(fruits); // no apples in the fruits now

fruits.unshift("peach"); //insert the element at 1st in array
console.log(fruits); // now peach in the fruits now

const veggie = ["potato", "tomato", "corriender", "chillies"];

const basket = veggie.concat(fruits);
console.log(basket); // veggies and fruits are club together
