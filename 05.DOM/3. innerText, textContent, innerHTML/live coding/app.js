// innerText
// textContent
// innerHTML

// innerText
const P = document.querySelector("p");
console.log(P.innerHTML);

// textContent
console.log(P.textContent);

// innerHTML
const h1 = document.querySelector("h1");
h1.innerHTML = "Text Changed";
//instead of hello world to text changed

h1.innerHTML = "<del>Aditya</del>";
