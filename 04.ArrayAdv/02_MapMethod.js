// the Map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//the map method will not modify the existing array but will create a new array

//but in forEach will do the changes in the existing array and wont be creating a new one
let num = [1, 2, 3, 4, 5];

let double = num.map((num) => num * 2);

console.log(double);
let ppl = [
  { fname: "Adi", lname: "tambe" },
  { fname: "Aditya", lname: "T." },
  { fname: "Aditya", lname: "T." },
];

const results = ppl.map((person) => {
  return [person.fname, person.lname];
});

console.log(results);

const RandomNumbers = [1, 2, 4, 3, 45, 65, 75, 6, 4];
const randomResults = RandomNumbers.map((RandomNumbers) => RandomNumbers * 10);

console.log(randomResults);

//map is built in structure introduced that allow to create key value pairs where both the keys & values can be of any data type. it is similar to an object, but with a few key differences:

// --> keys can be of any data type: unlike objects, where keys are limited to strings and symbols Map allows you to use any Data type as keys including numbers, booleans, objects and even other Mps instances

// --> maintains insertion order: it preserves the order of key-value pairs are they were inserted while object keys  may not be guaranteed to be in a specific order

// --> iteration: it provides built in methods for easy iteration over its elements

// --> Map is another form of constructor in javaScript
const map = new Map();

console.log(map);
const keyOne = "string";
const keyTwo = {};

const keyThree = function () {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");
console.log(map);

console.log(map.delete(keyTwo));
console.log(map.size);

//iterating with the for of loop

for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
console.log(map.size);
console.log(map.delete("b"));
