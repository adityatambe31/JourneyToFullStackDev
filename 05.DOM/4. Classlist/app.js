// classlist
// add()
// remove()
// toggle()

// classlist
// --> this property allows us to view how many class does and element holds
const h1 = document.querySelector("h1");
console.log(h1.classList);

// add()
//how to add classlist()
h1.classList.add("styles");

// remove()
// how to remove the class
h1.classList.remove("styles");

// toggle()
//this will create a new class and provide it to the h1 tag
h1.classList.toggle("adi");
