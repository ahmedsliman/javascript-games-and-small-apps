// 'use strict';

// this based on how you called the method:
const person = {
    name: "Soliman",
    walk () {
        console.log(this);
    }
}

// if you called the method as a method object (person.walk()), it will refer to the object
person.walk();

// if you called the method as an outside an object (person.walk()), it will refer to the global object, window object here
const walk = person.walk;
walk();

// to fix this, use bind
const walk2 = person.walk.bind(person);
walk2();
