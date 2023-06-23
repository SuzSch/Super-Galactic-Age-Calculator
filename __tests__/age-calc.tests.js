import { AgeCalc } from './../src/age-calc.js';

describe('Planet Age Calculator', () => {

  test('get the users age in earth years', () => {
    const earth = new AgeCalc(10);
    expect(earth.age).toEqual(10)
  })

  test('get the users age in Mercury years', () => {
    const mercury = new AgeCalc(10);
    expect(mercury.age).toEqual(2.4)
  })
});