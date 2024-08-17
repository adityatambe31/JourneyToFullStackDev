// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup

let one = document.querySelector(".click");
let two = document.querySelector(".contextmenu");
let three = document.querySelector(".dblclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let nine = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");

//this event will change the color of text from
//black to blue every time mouse pointer touches the text
one.addEventListener("click", () => {
  one.classList.toggle("blue");
});

//in this case, if I right click then it will change it's color from black to red
//and if click again it will switch to black again
two.addEventListener("contextmenu", () => {
  two.classList.toggle("red");
});

//if we double click it will change it's color
three.addEventListener("dblclick", () => {
  three.classList.toggle("purple");
});

//The event occurs when the user presses a mouse button over an element
four.addEventListener("mousedown", () => {
  four.classList.toggle("blue");
});

//The event occurs when the pointer is moved onto an element
five.addEventListener("mouseenter", () => {
  five.classList.toggle("teal");
});

//The event occurs when the pointer is moved out of an element
six.addEventListener("mouseleave", () => {
  six.classList.toggle("red");
});

// The event occurs when the pointer is moving while it is over an element
seven.addEventListener("mousemove", () => {
  seven.classList.toggle("skyblue");
});

//The event occurs when a user moves the mouse pointer out of an element, or out of one of its children
eight.addEventListener("mouseout", () => {
  eight.classList.toggle("green");
});

//The event occurs when the pointer is moved onto an element, or onto one of its children
nine.addEventListener("mouseover", () => {
  nine.classList.toggle("red");
});

// The event occurs when a user releases a mouse button over an element
ten.addEventListener("mouseup", () => {
  ten.classList.toggle("orange");
});
