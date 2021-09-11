const ahmed = {
    firstName: "Ahmed",
    lastName: "Soliman",
    greet: function () {
        return `Hello, ${this.firstName}`
    },
    greet2: () => `Hello, ${this.firstName}`
}

console.log(ahmed.greet());
console.log(ahmed.greet2());
