// 7) Download Simulation
// The callback receives a string confirming simulated download from the given URL.
function simulateDownload(
  url: string,
  callback: (message: string) => void
): void {
  setTimeout(() => {
    callback(`Downloaded data from ${url}`);
  }, 2000);
}

// Usage
simulateDownload('https://kunnikar.com', console.log);
