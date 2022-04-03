const getTodos = async () => {
    const response = await fetch('todos/todos.json');
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);

getTodos()
.then(data => console.log('resolved:', data))
.catch(err => console.log('rejected:', err));

console.log(3);
console.log(4);
