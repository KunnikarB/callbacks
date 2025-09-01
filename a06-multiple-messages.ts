// 6) Multiple Messages
function multipleMessages(callback: (message: string) => void): void {
  const messages = ['Good moring', 'Good afternoon', 'Good Evening'];
  messages.forEach((msg) => callback(msg));
}

// Usage
multipleMessages(console.log);
