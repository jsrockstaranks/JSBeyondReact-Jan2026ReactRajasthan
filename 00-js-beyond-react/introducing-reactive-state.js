function createState(initialValue) {
  let value = initialValue;
  const subscribers = new Set();

  function get() {
    return value;
  }

  function set(newValue) {
    value = newValue;
    subscribers.forEach(fn => fn());
  }

  function subscribe(fn) {
    subscribers.add(fn);
  }

  return { get, set, subscribe };
}

const {get, set, subscribe } = createState(0);

// Consider this like a rerender function of React that will run everytime the value updates
/* 
subscribe(() => console.log('value updated and new value is ', get()));
get()
set(143)
*/