function createCounters() {
  const counters = [];
  for (var i = 0; i < 3; i++) {
    counters.push(() => console.log(i));
  }
  return counters;
}

const c = createCounters();
c[0](); // 3
c[1](); // 3
c[2](); // 3
