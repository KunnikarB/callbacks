"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 5) Pizza Order
// The callback receives "Your pizza is ready!" after 3 seconds.
function orderPizza(callback) {
    setTimeout(() => {
        callback('Your pizza is ready!');
    }, 3000);
}
// Usage
orderPizza(console.log);
//# sourceMappingURL=a05-pizza-order.js.map