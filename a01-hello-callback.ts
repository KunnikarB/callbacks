// / 1) Hello Callback
function helloCallback(callback: (message: string) => void): void {
    callback('Hello from callback!');
}

// Usage
helloCallback(console.log);