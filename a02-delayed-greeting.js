// 2) Delayed Greeting
function sayHelloLater(callback) {
    setTimeout(function () {
        callback('Hi, I am late!');
    }, 2000);
}
// Usage
sayHelloLater(console.log);
