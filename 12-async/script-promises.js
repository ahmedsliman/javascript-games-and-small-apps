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

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource!');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

// Promise
// getTodos('todos/todos.json')
// .then(data => console.log('promise resolved:', data))
// .catch(err => console.log('promise failed:', err));

// Chaining Promises
getTodos('todos/todos.json').then(data => {
    console.log('Promise 1 data: ', data);
    return getTodos('todos/todos2.json');
}).then(data => {
    console.log('Promise 2 data: ', data);
    return getTodos('todos/todos3.json');
}).then(data => {
    console.log('Promise 3 data: ', data);
})
.catch(err => console.log('promise rejected: ', err));
