const container = document.querySelector(".container");
const h1 = document.querySelector(".main-headings");
const p = document.querySelector(".sub-headings");
const btn = document.querySelector(".btn");

// 1. Proivde "400px" of height ot container element
console.log((container.style.height = "400px"));

// 2. Change the background color of container to "teal"
console.log((container.style.backgroundColor = "teal"));

// 3. Change the color of h1 to "skyblue"
console.log((h1.style.color = "skyblue"));

// 4. Change the fontFamily of paragraph to "sans-serif"
console.log((p.style.fontFamily = "sans-serif"));

// 5. Change the color of paragraph to "white"
console.log((p.style.color = "white"));

// 6. Change the color of btn to pink
console.log((btn.style.color = "pink"));
