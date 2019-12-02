import each from 'jest-each';
import {
  factorial,
  factorialPTC,
  factorialCPS,
  factorialTrampoline,
} from './factorial';

[factorial, factorialPTC, factorialCPS, factorialTrampoline].forEach(fn => {
  describe(`${fn.name}`, () => {
    each`
      n     | expected
      ${0}  | ${1}
      ${1}  | ${1}
      ${2}  | ${2}
      ${3}  | ${6}
      ${4}  | ${24}
      ${5}  | ${120}
    `.test('should return $expected when called with $n', ({ n, expected }) => {
      expect(fn(n)).toBe(expected);
    });
  });
});
