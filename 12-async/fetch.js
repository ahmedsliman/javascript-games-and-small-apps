fetch('todos/todos.json')
.then((response) => {
    console.log('resolved');
    return response.json();
})
.then((data) => console.log(data))
.catch((err) => {
    console.log('rejected: ', err);
});
