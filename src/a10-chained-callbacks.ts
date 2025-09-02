// Chained Callbacks

// Each callback moves execution to the next step after 1 second, printing progress in order.

// Step 1 function
function step1(callback: () => void): void {
  setTimeout(() => {
    console.log('Step 1 done');
    callback();
  }, 1000);
}

// Step 2 function
function step2(callback: () => void): void {
  setTimeout(() => {
    console.log('Step 2 done');
    callback();
  }, 1000);
}

// Step 3 function
function step3(callback: () => void): void {
  setTimeout(() => {
    console.log('Step 3 done');
    callback();
  }, 1000);
}

// Chaining the steps
step1(() => {
  step2(() => {
    step3(() => {
      console.log('All steps completed!');
    });
  });
});
