// Step 1 function
function step1(callback) {
    setTimeout(function () {
        console.log('Step 1 done');
        callback();
    }, 1000);
}
// Step 2 function
function step2(callback) {
    setTimeout(function () {
        console.log('Step 2 done');
        callback();
    }, 1000);
}
// Step 3 function
function step3(callback) {
    setTimeout(function () {
        console.log('Step 3 done');
        callback();
    }, 1000);
}
// Chaining the steps
step1(function () {
    step2(function () {
        step3(function () {
            console.log('All steps completed!');
        });
    });
});
