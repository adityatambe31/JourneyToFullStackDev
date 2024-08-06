// every() & some() methods

// they are built in array methods in JS that allows you to check the elements of an array based on a given condition both these methods take a callback function as an argument which is applied to each element of the array

const ppl = ["adit", "arya", "daksh"];

// if this condition is true for every array in element then it will be true else false
let res = ppl.every((person) => person.length === 4);

console.log(res);

// if this condition is true for some array in element then it will be true else false

//partially true
res = ppl.some((person) => person.length === 4);

console.log(res);
