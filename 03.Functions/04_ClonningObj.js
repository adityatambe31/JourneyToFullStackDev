const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five"];

const concat = [...strNums, ...moreStrNums];

console.log(concat);

let ppl = ["adi", "krish", "atty"];

const allppls = ["daksh", "dalen", ...ppl];
console.log(allppls);

//shallow copies

const obj1 = { x: 1, y: 2 };
const obj2 = { x: 4, y: 6 };
const obj3 = { obj1, obj2 };

// console.log(obj3);

let person = {
  name: adi,
  gender: male,
  age: 21,
};

const clone = { ...person };
console.log(clone);
