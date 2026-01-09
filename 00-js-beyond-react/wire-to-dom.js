const count = createState(0);

function Counter() {
  const container = document.createElement("div");

  const button = document.createElement("button");
  button.textContent = "+1";

  const text = document.createElement("p");

  function render() {
    text.textContent = `Count: ${count.get()}`;
  }

  button.addEventListener("click", () => {
    count.set(count.get() + 1);
  });

  count.subscribe(render);
  render();

  container.append(button, text);
  return container;
}

document.body.appendChild(Counter());
