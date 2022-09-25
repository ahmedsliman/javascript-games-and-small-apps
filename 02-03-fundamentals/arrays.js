// [x] create an array with simple way
// [x] create an array with new Array way
// [x] Add elements to the array end/beginning
// [x] remove element from an array
// [x] check if element exits
// [x] get an index for an item
// ========================================================
'use strict';

const friends = [];
friends.push('M.Galal');
friends.push('Nabeel');
friends.push('Mohannad');
// remove from the end
const popped = friends.pop();
console.log(popped);
console.log(friends);
// remove from the end
const shifted = friends.shift();
console.log(shifted);
console.log(friends);
// Add to the beginning
friends.unshift('Nasr');
friends.unshift('M.Hossam');

console.log(friends);

// #####

const colleagues = new Array('Marcelo', 'Michael', 'Ed');
console.log(colleagues);

// get an index for an item
console.log(colleagues.indexOf('Ed'));
console.log(colleagues.indexOf('Moana'));
console.log(colleagues.includes('Zaman'));
