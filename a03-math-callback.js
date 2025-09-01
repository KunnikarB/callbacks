// 3) Math Callback
// The callback receives the sum of two numbers.
function addNumbers(a, b, callback) {
    var sum = a + b;
    callback(sum);
}
// Usage
addNumbers(9, 10, console.log);
