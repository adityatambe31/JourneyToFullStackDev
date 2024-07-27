//destructuring

let car = {
  model: "elantra",
  company: "hyundai",
};

function showCar({ model, company, color: c = "blue" }) {
  console.log(`${company} ${model} ${c}`);
}

showCar(car);

//nested destructuring

const songs = [
  { name: "Attention", singer: "Charlie" },
  { name: "Bones", singer: "Imagine" },
  { name: "Tum Jo Aye", singer: "Khan" },
];

const [, , { singer: s }] = songs;

console.log(s);
