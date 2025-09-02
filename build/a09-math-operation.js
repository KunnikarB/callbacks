"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 9) Math with Different Operations
// The callback receives the result of the chosen math operation.
function calculate(a, b, operation, callback) {
    let result;
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b !== 0 ? a / b : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
    }
    callback(result);
}
// Usage
calculate(2, 4, 'multiply', console.log);
//# sourceMappingURL=a09-math-operation.js.map