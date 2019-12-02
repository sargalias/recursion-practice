import each from 'jest-each';
import { power, powerPTC, powerCPS, powerTrampoline } from './power';

[power, powerPTC, powerCPS, powerTrampoline].forEach(fn => {
  describe(`${fn.name}`, () => {
    each`
      base    | exponent  | expected
      ${1}    | ${0}      | ${1}
      ${1}    | ${1}      | ${1}
      ${1}    | ${2}      | ${1}
      ${2}    | ${0}      | ${1}
      ${2}    | ${1}      | ${2}
      ${2}    | ${2}      | ${4}
      ${2}    | ${4}      | ${16}
    `.test(
      'should return $expected when called with $base and $exponent',
      ({ base, exponent, expected }) => {
        expect(fn(base, exponent)).toBe(expected);
      },
    );
  });
});
