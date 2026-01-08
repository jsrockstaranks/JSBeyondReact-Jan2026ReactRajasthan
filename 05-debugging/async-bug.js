let user;

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(r => r.json())
  .then(d => user = d);

console.log('Sync:', user); // undefined

(async function () {
  const better = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(r => r.json());
  console.log('Await:', better); // resolved user
})();
