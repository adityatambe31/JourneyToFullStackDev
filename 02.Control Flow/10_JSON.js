const person = {
  name: "Aditya",
  age: 21,
  email: "amtambe@myseneca.ca",
  hobbies: ["Football", "Coding"],
  address: "Toronto",
};

const JSONstring = JSON.stringify(person);

//JSON.stringify() -> convert js object to JSON file

//to revert it back from JSON to object we use parse()
const parsedObject = JSON.parse(jsonString);
