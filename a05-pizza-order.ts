// 5) Pizza Order
// The callback receives "Your pizza is ready!" after 3 seconds.
function orderPizza(callback: (message: string) => void): void {
  setTimeout(() => {
    callback('Your pizza is ready!');
  }, 3000);
}

// Usage
orderPizza(console.log);
