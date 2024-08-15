//symbol is a unique an d immutable primitive data type introduced in ES6. A symbol is of ten used as an  identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers symbols are guaranteed to be unique When you create a symbol it is unique and thu cannot be recreated or  changed. this uniqueness ensures that symbols will not collide with other property names evn if they have the same string representation.

console.log(typeof mySymbol);

// comparing symbols

// console.log(mySymbol1 === mySymbol2);
//symbols cannot be same
// so it can be used to true and false or boolean

const mySymbol = Symbol("adi");
const mySymbol2 = Symbol("tambe");

const obj = {};

obj[mySymbol] = "Value1";
obj[mySymbol2] = "Value2";
console.log(obj);

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

const adi = {};
adi.age = 19;
adi["gender"] = "male";
console.log(adi);

let symbol = Symbol();

console.log(typeof symbol);

let obj = {
  fName: "Sai",
  lName: "Baba",
};

obj[Symbol("foo")] = "same value ";
console.log(obj);

for (let i in obj) {
  console.log(i);
}
