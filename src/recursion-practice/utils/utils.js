const trampoline = fn => (...args) => {
  let result = fn(...args);

  while (typeof result === 'function') {
    result = result();
  }

  return result;
};

const identity = x => x;

export { trampoline, identity };
