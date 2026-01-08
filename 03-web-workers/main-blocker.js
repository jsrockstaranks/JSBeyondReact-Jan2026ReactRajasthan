console.log("main blocker loaded, blocking main thread.");
let sum = 0;
for (let i = 0; i < 1_000_000_000; i++) {
  sum += i;
}
console.log("Processing complete");