"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 6) Multiple Messages
// The callback is called 3 times, each time with a different message.
function multipleMessages(callback) {
    const messages = ['Good moring', 'Good afternoon', 'Good Evening'];
    messages.forEach((msg) => callback(msg));
}
// Usage
multipleMessages(console.log);
//# sourceMappingURL=a06-multiple-messages.js.map