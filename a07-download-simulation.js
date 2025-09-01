// 7) Download Simulation
function simulateDownload(url, callback) {
    setTimeout(function () {
        callback("Downloaded data from ".concat(url));
    }, 2000);
}
// Usage
simulateDownload('https://kunnikar.com', console.log);
