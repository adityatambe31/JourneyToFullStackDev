//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//nested loop
for (let i = 0; i < 5; i++) {
  console.log("---outer loop ---");

  for (let j = 0; j < 5; j++) {
    console.log("---inner loop ---");
  }
}

// while loop
let i = 1;

while (i <= 5) {
  console.log("Hi Adi", i);
  i++;
}

i = 10;
while (i < 100) {
  console.log("Adi", i);
  i++;
}

//do while loop
do {
  console.log("Adi", i);
  i++;
} while (i < 5);

i = 20;
do {
  console.log("Adi", i);
  i++;
} while (i <= 400);
