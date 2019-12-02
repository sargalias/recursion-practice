// sumRange with no optimisations
const sumRange = n => {
  if (n <= 1) return n;
  return n + sumRange(n - 1);
};

// sumRange with tail call optimisation
const sumRangePTC = (n, totalSoFar = 0) => {
  const newTotalSoFar = n + totalSoFar;

  if (n <= 1) return newTotalSoFar;

  return sumRangePTC(n - 1, newTotalSoFar);
};

// sumRange with tail call optimisation and a user-friendly public function signature: sumRange(n)
const sumRangePTCFacade = (() => {
  const sumRange = n => _sumRange(n, 0);

  const _sumRange = (n, totalSoFar = 0) => {
    const newTotalSoFar = n + totalSoFar;

    if (n <= 1) return newTotalSoFar;

    return _sumRange(n - 1, newTotalSoFar);
  };

  return sumRange;
})();

// sumRange with continuous passing style
const identity = x => x;
const sumRangeCPS = (n, cont = identity) => {
  if (n <= 1) return cont(n);

  const cb = res => cont(res + n);
  return sumRangeCPS(n - 1, cb);
};

// sumRange with trampolining
const trampoline = fn => (...args) => {
  let result = fn(...args);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
};

const sumRangeTrampoline = trampoline(function _sumRange(n, totalSoFar = 0) {
  const newTotalSoFar = n + totalSoFar;

  if (n <= 1) return newTotalSoFar;

  return () => _sumRange(n - 1, newTotalSoFar);
});

// sumRange with trampolining and a user-friendly public function signature: sumRange(n)
const sumRangeTrampolineFacade = (() => {
  const sumRangeTrampoline = n => _sumRangeTrampoline(n, 0);

  const _sumRangeTrampoline = trampoline(function _sumRange(n, totalSoFar = 0) {
    const newTotalSoFar = n + totalSoFar;

    if (n <= 1) return newTotalSoFar;

    return () => _sumRange(n - 1, newTotalSoFar);
  });

  return sumRangeTrampoline;
})();

export {
  sumRange,
  sumRangePTC,
  sumRangePTCFacade,
  sumRangeCPS,
  sumRangeTrampoline,
  sumRangeTrampolineFacade,
};
