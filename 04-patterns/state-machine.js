function machine(state, transitions) {
  return (event) => transitions[state]?.[event] && (state = transitions[state][event]);
}

const turnstile = machine('LOCKED', {
  LOCKED: { COIN: 'UNLOCKED' },
  UNLOCKED: { PUSH: 'LOCKED' }
});

turnstile('COIN'); // UNLOCKED
turnstile('PUSH'); // LOCKED
