import { trampoline, identity } from '../utils';

const factorial = n => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const factorialPTC = (n, totalSoFar = 1) => {
  if (n <= 1) return totalSoFar;
  const newTotalSoFar = n * totalSoFar;
  return factorialPTC(n - 1, newTotalSoFar);
};

const factorialCPS = (n, cont = identity) => {
  if (n <= 1) return cont(1);
  return factorialCPS(n - 1, remainingResult => cont(remainingResult * n));
};

const factorialTrampoline = trampoline(function _factorialTrampoline(
  n,
  totalSoFar = 1,
) {
  if (n <= 1) return totalSoFar;
  return () => _factorialTrampoline(n - 1, n * totalSoFar);
});

export { factorial, factorialPTC, factorialCPS, factorialTrampoline };
