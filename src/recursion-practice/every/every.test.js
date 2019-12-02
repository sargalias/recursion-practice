import each from 'jest-each';
import { every, everyPTC } from './every';

[every, everyPTC].forEach(fn => {
  describe(`${fn.name}`, () => {
    each`
      arr           | predicate             | expected
      ${[1, 2, 3]}  | ${el => el < 7}       | ${true}
      ${[1, 2, 7]}  | ${el => el < 7}       | ${false}
      ${[1, 2, 3]}  | ${el => el % 2 === 0} | ${false}
      ${[2, 4, 6]}  | ${el => el % 2 === 0} | ${true}
    `.test(
      'should return $expected when called with $arr and $predicate',
      ({ arr, predicate, expected }) => {
        expect(fn(arr, predicate)).toBe(expected);
      },
    );
  });
});
