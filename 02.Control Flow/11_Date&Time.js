// const currentDate = new Date();
// console.log(currentDate);

//Mon Jul 22 2024 19:20:03 GMT-0400 (Eastern Daylight Time)

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hour}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleTimeString());

// to increment a date

//next day
console.log(date.getDate() + 1);

//previous day
console.log(date.getDate() - 1);

//set Interval & setTimeout

//repeat a block of code at a certain duration of tim
//once hit the time duration it will stop..

setInterval(
  () => console.log(`This function will be executed every 2 sec`),
  2000
);

setTimeout(function () {
  console.log(`This function will be executed after 3 secs`), 3000;
});

//clear Interval

const intervalID = setInterval(function () {
  console.log(`This function is being executed at certain interval `), 1000;
});

//Stop the interval after 10 seconds

setTimeout(function () {
  clearInterval(intervalID);
  console.log(`Interval Stopped Finally! `);
}, 10000);
