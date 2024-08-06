// the reduce () method applies the reducer function to each element of array, accumulating the results into a single value.

// It is often used to perform calculation on array elements and simplify the array into a single value

// this method does not change the original array but rather creates copy of it. it will make it more simple or single array

const nums = [1, 2, 3, 4, 5];

//p: previous value
//c: current value
const sum = nums.reduce((p, c) => {
  console.log(`Previous: ${p}`);
  console.log(`Current: ${c}`);
  return p + c;
}, 0);

//0+1 => 1
//1+2 => 3
//3 + 3 => 6
// 6 + 4 => 10
//10 + 5 => 15
console.log(sum);

const ppls = [
  {
    name: "adi",
    age: 19,
  },
  {
    name: "arya",
    age: 24,
  },
  {
    name: "daksh",
    age: 19,
  },
];

const oldAge = ppls.reduce((p, c) => (c.age > p ? c.age : p), 0);

console.log(oldAge);

const fruits = ["apple", "cherry", "orange", "mango"];

const wordFreq = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap[word] || 0 + 1;
  return frequencyMap;
}, {});

console.log(wordFreq);

function calculateProduct(arr) {
  return arr.reduce((p, c) => p * c);
}
const num = [2, 3, 4, 5];

const product = calculateProduct(num);

console.log(product);
