// 3) Math Callback
// The callback here receives the sum of two numbers.
function addNumbers(
  a: number,
  b: number,
  callback: (result: number) => void
): void {
  const sum = a + b;
  callback(sum);
}

// Usage
addNumbers(9, 10, console.log);
