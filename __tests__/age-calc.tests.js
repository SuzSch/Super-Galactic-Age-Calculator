import { AgeCalc } from './../src/age-calc.js';

describe('Planet Age Calculator', () => {

  test('get the users age in earth years', () => {
    const earthAge = new AgeCalc(10);
    expect(earthAge.age).toEqual(10)
  })
});