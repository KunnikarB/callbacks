// 2) Delayed Greeting
function sayHelloLater(callback: (message: string) => void): void {
  setTimeout(() => {
    callback('Hi, I am late!');
  }, 2000);
}

// Usage
sayHelloLater(console.log);
