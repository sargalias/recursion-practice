import each from 'jest-each';
import {
  sumNestedArray,
  sumNestedArrayCPS,
  sumNestedArrayIter,
} from './sumNestedArray';

[sumNestedArrayIter, sumNestedArray, sumNestedArrayCPS].forEach(fn => {
  describe(`${fn.name}`, () => {
    each`
      arr                             | expected
      ${[]}                           | ${0}
      ${[1]}                          | ${1}
      ${[1, 2, 3, 4, 5]}              | ${15}
      ${[1, [2, 3], 4, 5]}            | ${15}
      ${[1, [2, [3], 4], 5]}          | ${15}
      ${[1, [], [2, [], [3], 4], 5]}  | ${15}
    `.test(
      'should return $expected when called with $arr',
      ({ arr, expected }) => {
        expect(fn(arr)).toBe(expected);
      },
    );
  });
});
