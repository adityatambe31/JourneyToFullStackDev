// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

const first = document.querySelector(".first");

console.log(first.innerHTML);

const second = document.querySelector(".second");

console.log(second.textContent);

const third = document.querySelector(".third");

console.log(third.innerHTML);
