'use strict';

const ahmed = {
    'firstName': 'Ahmed',
    'lastName': 'Soliman',
    'birthYear': 1984,
    'job': 'Software Engineer',
    'friends': ['nasr', 'galal', 'bassem'],
    hasDriverLicense: true,
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    }
};

const nameKey = 'Name';

console.log(ahmed['first' + nameKey]);
console.log(ahmed['last' + nameKey]);

// const friends = 'friends';
// console.log(`Ahmed has ${ahmed.friends.length} friend, and ${ahmed[friends][0]} is his best friend!`);
// OR
console.log(`Ahmed has ${ahmed.friends.length} friend, and ${ahmed.friends[0]} is his best friend!`);

console.log(ahmed.calcAge());
console.log(ahmed['calcAge']());
