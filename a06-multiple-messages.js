// 6) Multiple Messages
function multipleMessages(callback) {
    var messages = ['Good moring', 'Good afternoon', 'Good Evening'];
    messages.forEach(function (msg) { return callback(msg); });
}
// Usage
multipleMessages(console.log);
