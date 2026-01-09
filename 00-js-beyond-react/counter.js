let count = 0;

function render() {
  document.body.innerHTML = `
    <button id="inc">+</button>
    <p>Count: ${count}</p>
  `;
}

render();

document.body.addEventListener("click", () => {
  count++;
  render();
});
