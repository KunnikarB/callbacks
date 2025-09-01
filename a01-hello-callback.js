// / 1) Hello Callback
// The callback here receives the message "Hello from callback!" and print it.
function helloCallback(callback) {
    callback('Hello from callback!');
}
// Usage
helloCallback(console.log);
