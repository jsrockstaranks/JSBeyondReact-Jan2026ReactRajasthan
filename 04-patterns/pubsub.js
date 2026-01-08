function createPubSub() {
  const subscribers = new Set();

  return {
    subscribe(fn) {
      subscribers.add(fn);
      return () => subscribers.delete(fn);
    },
    publish(value) {
      subscribers.forEach(fn => fn(value));
    }
  };
}

const bus = createPubSub();

const unsub = bus.subscribe(v => console.log('Got:', v));
bus.publish('Hello');
unsub();
bus.publish('Bye');
