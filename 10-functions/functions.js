const oneWord = (str) => str.replace(/ /g, '').toLowerCase();
const upperFirstWord = (str) => {
    const [first, ...rest] = str.split(' ');
    return [first.toUpperCase(), ...rest].join(' ');
}

const str2 = (str, fn) => {
    console.log(`Original Text: ${str}`);
    console.log(`Transformed Text: ${fn(str)}`);
    console.log(`Function Name: ${fn.name}`);
};

// str2('ahmed soliman', oneWord);
// str2('ahmed soliman', upperFirstWord);

// Return function
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hi')('Soly!');
