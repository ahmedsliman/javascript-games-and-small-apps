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

function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong!');
            }
        }, 2000);
    });
}

addPost({name: "Mohamed Galal", age: 35})
    .then(getPosts)
    .catch(err => console.log('err'));

async function init() {
    await addPost({name: 'test async', age: 3});
    getPosts();
}

init();

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}