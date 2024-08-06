///find() is another built in array helper function that matches a specific condition. it returns the value of the first element that satisfies the given testing function or undefined if no element is found.

let ppl = [
  { fname: "Adi", lname: "tambe" },
  { fname: "Aditya", lname: "T." },
  { fname: "Aryas", lname: "T." },
];

let results = ppl.find((person) => person.fname === "Aditya");

console.log(results);

const posts = [
  { id: 1, content: "funny" },
  { id: 2, content: "happy" },
  { id: 3, content: "sad" },
];

const postRes = posts.find((post) => post.content === "funny");

console.log(postRes);

let ages = [3, 10, 18, 20];

function checkingAges(ages) {
  return ages > 18;
}
const adults = ages.find(checkingAges);

console.log(adults);
