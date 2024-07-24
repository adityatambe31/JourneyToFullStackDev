// // function user(name, age, work) {
// //   return {
// //     name: name,
// //     age: age,
// //     work: work,
// //   };
// // }

// // const adi = user("Adi", 21, "Full-stack-dev");

// // console.log(adi);

// let a = 1;
// let b = 2;
// let c = 3;

// const obj = { a, b, c };
// console.log(obj);

// function countTo5(count) {
//   if (count === true) {
//     for (let i = 0; i <= 5; i++) {
//       console.log(`${i}`);
//     }
//   }
// }

// countTo5(false);
// countTo5(true);

function ratings(rate) {
  if (rate === 5) {
    console.log(`High Ratings :)`);
  } else if (rate === 0) {
    console.log(`Low Ratings :(`);
  } else {
    console.log(`No Ratings :( found!`);
  }
}

// ratings();

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(3));
