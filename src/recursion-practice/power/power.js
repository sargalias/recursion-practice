import { trampoline, identity } from '../utils';

// Power
const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
};

// Power proper tail call
const powerPTC = (base, exponent, resultSoFar = 1) => {
  if (exponent === 0) {
    return resultSoFar;
  }
  const newResultSoFar = resultSoFar * base;
  return powerPTC(base, exponent - 1, newResultSoFar);
};

// Power continuous passing style
const powerCPS = (base, exponent, cont = identity) => {
  if (exponent === 0) {
    return cont(1);
  }
  return powerCPS(base, exponent - 1, result => cont(result * base));
};

// Power with trampolining
const powerTrampoline = trampoline(function _power(
  base,
  exponent,
  resultSoFar = 1,
) {
  if (exponent === 0) {
    return resultSoFar;
  }
  const newResultSoFar = resultSoFar * base;
  return () => powerPTC(base, exponent - 1, newResultSoFar);
});

export { power, powerPTC, powerCPS, powerTrampoline };
