"use strict";

console.clear();

const person = {
  name: "Ahmed Soliman",
  hobbies: [],
  addHobby(hobby) {
    this.hobbies.push(hobby);
    console.log(`Hobbies for ${this.name} is ${this.hobbies.join(", ")}`);
  }
};

person.addHobby("Reading");
console.log(person);

const animal = {
  name: "Kitty",
  hobbies: []
};

const things = {
  name: "Table",
  hobbies: []
};

// const addHobby = person.addHobby;

// Will not work
// animal.addHobby("Jumping");

// Call method
person.addHobby.call(animal, "Jumping");
console.log(animal);

// Apply method
person.addHobby.apply(animal, ["Running"]);
console.log(animal);
person.addHobby.apply(person, ["Running"]);
console.log(person);

// Bind method
person.addHobby.bind(things)('Hold things');
// OR
const addHobbyForThings = person.addHobby.bind(things);
addHobbyForThings('Has Arms');

//#### BIND
let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

// Another example with args
"use strict";

let user1 = {
	name: "Soliman",
};

function func1(phrase) {
	console.log(`${phrase}, ${this.name}`);
}

let func1User1 = func1.bind(user1, 'Hey');
func1User1();
