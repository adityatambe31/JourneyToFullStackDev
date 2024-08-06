// filter() method is a built in array method in JS which allows to create a new array containing elements that pass a certain conditions.

//also it provides a clean and concise way to filter out elements from an array based on specific criteria

const songs = [
  { name: "tum jo aye", singer: "ali khan", duration: 2.5 },
  { name: "attention", singer: "charlie", duration: 4.5 },
  { name: "ishq-risk", singer: "ali khan", duration: 3.5 },
];

console.log(songs.filter((song) => song.duration > 1.5));

const graphicCards = [
  { Rtx: "gtx4050" },
  { Rtx: "gtx4060" },
  { Rtx: "gtx4070" },
  { Rtx: "gtx4080" },
  { Rtx: "gtx4090" },
];

console.log(graphicCards.filter((graphic) => graphic.Rtx > "gtx4080"));

const ages = [32, 33, 16, 40];

function Adults(age) {
  return age >= 18;
}

const res = ages.filter(Adults);

console.log(res);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destrcution",
  "present",
];

const result = words.filter((words) => words.length >= 6);

console.log(result);
