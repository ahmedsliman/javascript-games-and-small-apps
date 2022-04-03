'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// console.log(1);
// console.log(2);

// // If will not block because it's async function (time functions in JS)
// setTimeout(() => {
//     console.log('callback function fired!');
// }, 2000);

// console.log(3);
// console.log(4);

//##### HttpRequest the old way
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Issue in the request!', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

// getTodos('todos.json', (err, data) => {
//     if (err) {
//         console.log("can't fetch the data!");
//     } else {
//         console.log(data);
//     }
// });

getTodos('todos/todos.json', (err, data) => {
    console.log(data);
    getTodos('todos/todos2.json', (err, data) => {
        console.log(data);
        getTodos('todos/todos3.json', (err, data) => {
            console.log(data);
        });
    });
});
