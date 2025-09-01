// 3) Math Callback
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
