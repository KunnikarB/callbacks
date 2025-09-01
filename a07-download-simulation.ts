// 7) Download Simulation
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
