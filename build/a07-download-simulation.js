"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 7) Download Simulation
// The callback receives a string confirming simulated download from the given URL.
function simulateDownload(url, callback) {
    setTimeout(() => {
        callback(`Downloaded data from ${url}`);
    }, 2000);
}
// Usage
simulateDownload('https://kunnikar.com', console.log);
//# sourceMappingURL=a07-download-simulation.js.map