// Logical Operator
const a = true;
const b = false;
const c = 4;

//logical AND &&
console.log(c > 2 && c < 2);

// OR Operator ||
console.log(c > 2 || c < 2);

//logical NOT operator (!)
console.log(c > 2 && !c < 2);

let pass = "aditya-dev";
if (pass.length >= 8 || pass.includes("web")) {
  console.log("valid pass");
} else {
  console.log("invalid pass");
}
