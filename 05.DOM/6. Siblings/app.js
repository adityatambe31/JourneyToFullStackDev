//we can check the parents of the element we are selecting
let Firstli = document.querySelector("li");

console.log(Firstli);

//we can check the parent's parent
console.log(Firstli.parentElement);
console.log(Firstli.parentElement.parentElement);

//to check the parent's children
// in this the ul parent has 4 li children
let ul = document.querySelector("ul");
console.log(ul.children);

//in this case it was 1 but we changed its value to one in letters
console.log((ul.children[0].innerText = "one"));

//in this the body this 2 children, these are ul and script
let body = document.querySelector("body");
console.log(body.children);

// in this next element sibling, we can see that in the ul list we have 4 li tags, so these 4 are siblings of one another and if we pick one and ask them their next siblings they will point it to the just next one. like in this case it is 2 for 1.
console.log(Firstli.nextElementSibling.textContent);
