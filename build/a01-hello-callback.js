"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// / 1) Hello Callback
// The callback here receives the message "Hello from callback!" and print it.
// Arrow function version
const helloCallback = (callback) => {
    callback('Hello from callback!');
};
// Usage
helloCallback(console.log);
//# sourceMappingURL=a01-hello-callback.js.map