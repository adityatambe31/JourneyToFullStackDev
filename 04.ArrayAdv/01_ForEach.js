// for each helper we pass in annoymous call

console.log("array");

const num = [1, 2, 3, 4];

let sum = 0;

function add(num) {
  sum += num;
}

num.forEach(add);
{
  console.log(sum);
}
