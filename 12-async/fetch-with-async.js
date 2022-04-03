const getTodos = async () => {
    const response = await fetch('todos/todos.json');

    // Promise will return reject and will be catched in catch
    if (response.status !== 200) {
        throw new Error('Issue in file!');
    }

    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);

getTodos()
.then(data => console.log('resolved:', data))
.catch(err => console.log('rejected:', err.message));

console.log(3);
console.log(4);
