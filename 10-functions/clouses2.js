function printName() {
    let name2 = 'Ahmed!';
    return function print() {
        console.log(name2);
    }
}

// console.dir(printName());

// Challenge
function addTo(firstNumber) {
    return function add (secondNumber) {
        let sum = firstNumber + secondNumber;
        console.log(sum);
    }
}

const addToThree = addTo(3);
const addToOne = addTo(1);

addToThree(1); // 4
addToOne(5); // 6
