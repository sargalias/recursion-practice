import { identity } from '../utils';

const sumNestedArrayIter = arr => {
  let sum = 0;
  arr.forEach(el => {
    if (Array.isArray(el)) {
      sum += sumNestedArrayIter(el);
    } else {
      sum += el;
    }
  });
  return sum;
};

const sumNestedArray = ([n1, ...rest]) => {
  if (n1 === undefined) return 0;

  const n1Result = Array.isArray(n1) ? sumNestedArray(n1) : n1;
  const restResult = sumNestedArray([...rest]);
  return n1Result + restResult;
};

const sumNestedArrayCPS = ([n1, ...rest], cont = identity) => {
  if (n1 === undefined) return cont(0);

  const cb = Array.isArray(n1)
    ? restResult =>
        sumNestedArrayCPS([...n1], n1Result => cont(n1Result + restResult))
    : restResult => cont(n1 + restResult);

  return sumNestedArrayCPS([...rest], cb);
};

export { sumNestedArrayIter, sumNestedArray, sumNestedArrayCPS };
