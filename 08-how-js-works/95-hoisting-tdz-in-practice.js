console.log(addDecl(2, 3));
console.log(addExp(2, 3));
console.log(addArr(2, 3));

function addDecl(x, y) {
    return x + y;
}

var addExp = function(x, y) {
    return x + y;
}

const addArr = (x, y) => x + y;
