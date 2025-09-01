// 7) Download Simulation
// The callback receives a string confirming simulated download from the given URL.
function simulateDownload(url, callback) {
    setTimeout(function () {
        callback("Downloaded data from ".concat(url));
    }, 2000);
}
// Usage
simulateDownload('https://kunnikar.com', console.log);
