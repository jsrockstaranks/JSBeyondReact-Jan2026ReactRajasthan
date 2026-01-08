console.log('A');

setTimeout(() => console.log('B'), 1000);

Promise.resolve().then(() => console.log('C'));

console.log('D');
