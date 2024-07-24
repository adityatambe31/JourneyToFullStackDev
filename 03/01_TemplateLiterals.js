//Template strings also knows as template literals are a feature in JS that allows you to create strings with embedded expression. They are donated by ` ` instead of single or double quotes. Template strings provides a more flexible way to construct strings, especially when they involve variables or expressions

console.log(`Part II of journey!`);

const Fname = "Adi";
const Lname = "T.";
const string = `This quick
brown fox
jumps over ${Fname}
the lazy dog ${Lname}`;

console.log(string);
