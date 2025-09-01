// / 1) Hello Callback
function helloCallback(callback) {
    callback('Hello from callback!');
}
// Usage
helloCallback(console.log);
