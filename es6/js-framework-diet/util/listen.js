//### Events
// listen('click', 'a', (event, target) => {
//   event.preventDefault();
//   console.log(`Clicked ${target.href}`);
// });
function listen(type, selector, callback) {
    document.addEventListener(type, event => {
        const target = event.target.closest(selector);

        if (target) {
            callback(event, target);
        }
    });
}