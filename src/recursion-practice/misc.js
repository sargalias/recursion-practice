import { compose } from 'ramda';

const isNullOrUndefined = val => val === null || val === undefined;

const getCurrentSession = () => {};
const add2 = x => x + 2;
const mul10 = x => x * 10;

const guard = predicate => fn => (...args) => {
  if (predicate(...args)) {
    return;
  }
  return fn(...args);
};

const guardNullUndefined = guard(isNullOrUndefined);

const compositionComponents = [mul10, add2];
const guardedCompositionComponents = compositionComponents.map(
  guardNullUndefined,
);

const calc = compose(...guardedCompositionComponents, getCurrentSession);
const result = calc();
console.log(result);

const formatDecimals = str => {
  return str.toFixed(2);
};
