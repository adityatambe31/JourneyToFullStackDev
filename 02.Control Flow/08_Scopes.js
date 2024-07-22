//Scopes -> global and local

//global scopes are those declared outside of a block

//local scope variables are those declared inside of a block.

//global scope example
let message = "Hey!";
console.log(message);

//local scope example
function greetings() {
  let mess = "Hi from local variable!";
  console.log(mess);
}

for (let i = 0; i < 5; i++) {
  greetings();
}
