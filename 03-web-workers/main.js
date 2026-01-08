console.log("main loaded");
const worker = new Worker('./worker.js', { type: "module" });

worker.onmessage = (e) => {
  console.log("Worker result:", e.data);
};

worker.onerror = (err) => {
  console.error("WORKER ERROR:", err.message, err);
};
// worker.postMessage("start");

worker.onmessage = (e) => {
  console.log('Worker result:', e.data);
};

worker.postMessage(10000000000);
