// 3) Math Callback
function addNumbers(a, b, callback) {
    var sum = a + b;
    callback(sum);
}
// Usage
addNumbers(9, 10, console.log);
