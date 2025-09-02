// 8) Success and Error Callback
// Either the success callback or error callback is called depending on a random result.
function randomSuccessOrError(
  onSuccess: (msg: string) => void,
  onError: (msg: string) => void
): void {
  if (Math.random() > 0.5) {
    onSuccess('Operation successful!');
  } else {
    onError('Operation failed!');
  }
}

// Usage
randomSuccessOrError(console.log, console.error);
