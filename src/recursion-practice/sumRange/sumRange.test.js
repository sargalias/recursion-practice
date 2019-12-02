import each from 'jest-each';
import { sumRange, sumRangePTC, sumRangePTCFacade, sumRangeCPS, sumRangeTrampoline, sumRangeTrampolineFacade } from './sumRange';

[sumRange, sumRangePTC, sumRangePTCFacade, sumRangeCPS, sumRangeTrampoline, sumRangeTrampolineFacade].forEach(fn => {
  describe(`${fn.name}`, () => {
    each`
      n     | expected
      ${0}  | ${0}
      ${1}  | ${1}
      ${2}  | ${3}
      ${3}  | ${6}
    `.test('should return $expected when called with $n', ({n, expected}) => expect(fn(n)).toBe(expected))
  });
});
