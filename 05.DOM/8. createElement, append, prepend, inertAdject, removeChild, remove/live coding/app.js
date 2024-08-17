// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// Creating the element
//creating
const h1 = document.createElement("h1");

//providing the content to the element
console.log((h1.textContent = "Bye!!"));

//providing the class to the element
h1.classList.add("greet");
console.log(h1);

//this will help to add the element into the body
const body = document.body;
//append Child --> add it to very end in this case it will append at the bottom of list
body.appendChild(h1);

//insert before()

//for this creating new li element
const ul = document.querySelector("ul");
const newLi = document.querySelector("li");
newLi.innerText = "new li tag";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");
//selector.insertBefore(asks what and where)
ul.insertBefore(newLi, firstLi);

// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// console.log(i.innerText("it's Italic"));
// console.log((i.style.color = "skyblue"));

// console.log(firstP.insertAdjacentElement("beforebegin", i));
// console.log(firstP.insertAdjacentElement("afterbegin", i));
// console.log(firstP.insertAdjacentElement("afterend", i));

let section = document.querySelector("section");
const i = document.createElement("h4");
i.innerText = "italic";
i.style.color = "blue";

section.append(i);
span.prepend(i, span);

let span = document.querySelector("span");
span.innerText = "adi";
span.style.color = "red";

span.append(i, span);
