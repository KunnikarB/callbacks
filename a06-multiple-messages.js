// 6) Multiple Messages
// The callback is called 3 times, each time with a different message.
function multipleMessages(callback) {
    var messages = ['Good moring', 'Good afternoon', 'Good Evening'];
    messages.forEach(function (msg) { return callback(msg); });
}
// Usage
multipleMessages(console.log);
