// 2) Delayed Greeting
// The callback receives "Hi, I am late!" after a 2-second delay.
function sayHelloLater(callback: (message: string) => void): void {
  setTimeout(() => {
    callback('Hi, I am late!');
  }, 2000);
}

// Usage
sayHelloLater(console.log);
