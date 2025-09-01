// 4) Uppercase Callback
function uppercaseString(
  input: string,
  callback: (result: string) => void
): void {
  callback(input.toUpperCase());
}

// Usage
uppercaseString('kunnikar boonbunlu', console.log);
