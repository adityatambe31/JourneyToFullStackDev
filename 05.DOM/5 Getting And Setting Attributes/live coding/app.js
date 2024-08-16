// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

// href
//helps in accessing the url
const a = document.querySelector("a");
console.log((a.href = "btwadi-portfolio.com"));

//this is a way of getting attributes
// value
//this reveals the value the input holds
const input = document.querySelector("input");
console.log(input.value);

// type
//by default it text if not set
//this will show what type it is, text,password, etc..
console.log(input.type);

//changing the href origin from facebook to linkedin

//this is a way for setting the attributes
a.href = "https://www.linkedin.com/feed/";
console.log((input.type = "password"));
// console.log((input.value = "adi"));
console.log((input.placeholder = "Email pls!"));

// getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttribute(attrName, value)
input.setAttribute("placeholder", "Password");
input.setAttribute("type", "Password");
