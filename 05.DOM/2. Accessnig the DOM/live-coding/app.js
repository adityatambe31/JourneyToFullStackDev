// ************ DOM SELECTORS ************
// 1. getElementsByTagName
// 2. getElementById
// 3. getElementsByClassName
// 4. querySelector
// 5. querySelectorAll

// ---------------------------------------
// Storing data in variables

// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2. getElementById
console.log(document.getElementById("main"));

// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));
console.log(document.getElementsByClassName("cls-1"));

// 4. querySelector
console.log(document.querySelector("h1"));
console.log(document.querySelector(".cls"));
console.log(document.querySelector(".cls-1"));
console.log(document.querySelector("#main"));
console.log(document.querySelector("#id-1"));

// 5. querySelectorAll
console.log(document.querySelectorAll("#id-1"));
console.log(document.querySelectorAll("li").length);
