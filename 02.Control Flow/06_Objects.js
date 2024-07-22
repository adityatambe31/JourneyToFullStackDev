//objects -> {label:value}
// key value

const person = {
  age: 21,
  name: "adi",
  location: "toronto",
  isProgramer: true,
};

console.log(typeof person);

//using dot notation for accessing items from objects
console.log(person.age);
console.log(person.name);
console.log(person.location);

//using bracket notation for accessing items from objects
console.log(person["isProgramer"]);

//making changes in the name
person.name = "aditya";
console.log(person.name);

delete person.name;
console.log(person);

const car = {
  type: "SUV",
  model: "Elantra",
  color: "grey",
};

console.log(car);

car.type = "sedan";
car.wheels = "16inches-Alloys";
console.log(car);
