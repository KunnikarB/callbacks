"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2) Delayed Greeting
// The callback receives "Hi, I am late!" after a 2-second delay.
function sayHelloLater(callback) {
    setTimeout(() => {
        callback('Hi, I am late!');
    }, 2000);
}
// Usage
sayHelloLater(console.log);
//# sourceMappingURL=a02-delayed-greeting.js.map