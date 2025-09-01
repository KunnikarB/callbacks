// 4) Uppercase Callback
// The callback receives the uppercase version of the input string.
function uppercaseString(
  input: string,
  callback: (result: string) => void
): void {
  callback(input.toUpperCase());
}

// Usage
uppercaseString('kunnikar boonbunlu', console.log);
