// 2) Delayed Greeting
// The callback receives "Hi, I am late!" after a 2-second delay.
function sayHelloLater(callback) {
    setTimeout(function () {
        callback('Hi, I am late!');
    }, 2000);
}
// Usage
sayHelloLater(console.log);
