import { AgeCalc } from './../src/age-calc.js';

describe('Planet Age Calculator', () => {

  test('get the users age in earth years', () => {
    const userAge = new AgeCalc(10);
    expect(userAge.age).toEqual(10)
  })

  test('get the users age in Mercury years', () => {
    const userAge = new AgeCalc(10);
    expect(userAge.mercuryAge()).toEqual(2.4)
  })
});