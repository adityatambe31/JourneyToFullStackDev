// Strings
let fName = "Aditya";
let sName = "full stack dev";
// console.log(fName + " " + sName);

// Concatenation
// let fullName = fName.concat(sName);
// console.log(fullName);

// Append
fName += " From Seneca";
console.log(fName);

//Checking the length for variable
console.log(fName.length);

console.log(fName.toLowerCase());
console.log(fName.toUpperCase());
// console.log(fName);

//Slice
console.log(fName.slice(0, 6));

//Split & Join
console.log(fName.split(" ").join("-"));

// Includes
//checks if the it has the characters in the string or not
console.log(fName.includes("a"));

//Trim Method
let First = "   Adi   ";
console.log(First);
console.log(First.trim());

// Using backTicks ` `
let desc = `This is 

a 

desc
><
`;
console.log(desc);

let favActorFirstName = "Tony";
let favActorLastName = " Stark";
let fullName = favActorFirstName.concat(favActorLastName);

console.log(fullName.toUpperCase());

let message = `My fav actor is ${fullName} and he is in the avengers`;

message += " his best sho is Silicon Valley";

console.log(message);
