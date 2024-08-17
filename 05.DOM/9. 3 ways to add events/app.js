// event is JS interaction with HTML that occurs when user manipulates the page

// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = alert("Adi!");

// secondBtn.onclick = function () {
//   console.log("Adi!!");
// };

// ----------- GREAT WAY-----------

const best = document.querySelector(".best");

best.addEventListener("click", function () {
  console.log("great way Adi!");
});

//using arrow function
best.addEventListener("click", () => {
  console.log("great way Adi!");
});
// ----------- Event (e) Object -----------

const para = document.querySelector(".para");

para.addEventListener("click", (event) => {
  console.log(event);
});
