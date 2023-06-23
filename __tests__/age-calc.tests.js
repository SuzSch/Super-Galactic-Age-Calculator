import { AgeCalc } from './../src/age-calc.js';

describe('Planet Age Calculator', () => {

  test('Should get the users age in earth years', () => {
    const userAge = new AgeCalc(10);
    expect(userAge.age).toEqual(10)
  })

  test('Should get the users age in Mercury years', () => {
    const userAge = new AgeCalc(10);
    expect(userAge.mercuryAge()).toEqual(2.4)
  })

  test('Should get the users age in Venus years', () => {
    const userAge = new AgeCalc(10);
    expect(userAge.venusAge()).toEqual(6.2)
  })

  test('Should get the users age in Mars years', () => {
    const userAge = new AgeCalc(10);
    expect(userAge.marsAge()).toBeCloseTo(18.8);
  })
});