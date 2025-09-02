"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3) Math Callback
// The callback here receives the sum of two numbers.
function addNumbers(a, b, callback) {
    const sum = a + b;
    callback(sum);
}
// Usage
addNumbers(9, 10, console.log);
//# sourceMappingURL=a03-math-callback.js.map