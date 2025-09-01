// 9) Math with Different Operations
function calculate(
  a: number,
  b: number,
  operation: 'add' | 'subtract' | 'multiply' | 'divide',
  callback: (result: number | string) => void
): void {
  let result: number | string;
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
