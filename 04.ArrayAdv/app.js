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
