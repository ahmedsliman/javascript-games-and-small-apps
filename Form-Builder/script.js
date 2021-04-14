'use strict';

const myName = 'Ahmed';

function first() {
  const age = 36;

  if (age >= 30) {
    const decade = 3;
    var millienial = true;
  }

  function second() {
    const job = 'teacher';

    console.log(`${myName} is ${age} old ${job}`);
  }

  second();
}

first();
