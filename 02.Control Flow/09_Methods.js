//Methods --> function inside an object

const person = {
  name: "Adi",
  age: 21,
  greet: function greet() {
    return `Hi, btw ${person.name} and I am ${person.age} years old!`;
  },
};

console.log(person.greet());
