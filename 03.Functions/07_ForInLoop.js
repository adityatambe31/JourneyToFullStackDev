let person = {
  name: "adi",
  gender: male,
  age: 21,
};

for (let keys in person) {
  console.log(keys, person[keys]);
}

const obj = { a: 1, b: 2, c: 3 };

for (let property in obj) {
  console.log(`${property} : ${obj[property]}`);
}
