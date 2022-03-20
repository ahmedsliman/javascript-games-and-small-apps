// console.log('I print first');
//
// setTimeout(() => {
//     console.log('I print first');
// }, 3000);
//
// console.log('I print third');

const posts = [
    {name: "Ahmed Soliman", age: 37},
    {name: "Mohamed Nasr", age: 30}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `${post.name}<br />`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function addPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

addPost({name: 'Mohamed Galal', age: 35}, getPosts);