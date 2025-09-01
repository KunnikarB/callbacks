// 5) Pizza Order
function orderPizza(callback) {
    setTimeout(function () {
        callback('Your pizza is ready!');
    }, 3000);
}
// Usage
orderPizza(console.log);
