// 6) Multiple Messages
// The callback is called 3 times, each time with a different message.
function multipleMessages(callback: (message: string) => void): void {
  const messages = ['Good moring', 'Good afternoon', 'Good Evening'];
  messages.forEach((msg) => callback(msg));
}

// Usage
multipleMessages(console.log);
