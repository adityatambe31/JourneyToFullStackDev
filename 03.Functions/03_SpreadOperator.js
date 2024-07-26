// The spread operators is a new addition to the set of operators in JS

// It takes in an iterable for instance an array
// and expands it into individual elements.

//it is mostly used to make shallow copies of JS objects

// using this operator makes the code more concise

// spread operator with function
function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "blue", "green", "yellow"];

giveMe4(colors);
console.log("---------");

// (...) array spread operator
giveMe4(...colors);
console.log("---------");
