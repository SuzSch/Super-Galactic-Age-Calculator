import { AgeCalc } from './../src/age-calc.js';

describe('Planet Age Calculator', () => {
  let userAge;

  beforeEach(() => {
    userAge = new AgeCalc(10);
  });

  test('Should get the users age in Earth years', () => {
    expect(userAge.age).toEqual(10)
  })

  test('Should get the users age in Mercury years', () => {
    expect(userAge.ageOnPlanet('mercury')).toEqual(2.4)
  })

  test('Should get the users age in Venus years', () => {
    expect(userAge.ageOnPlanet('venus')).toEqual(6.2)
  })

  test('Should get the users age in Mars years', () => {
    expect(userAge.ageOnPlanet('mars')).toBeCloseTo(18.8);
  })

  test('Should get the user age in Jupiter years', () => {
    expect(userAge.ageOnPlanet('jupiter')).toEqual(118.6);
  })

  test('Should determine how many years have passed on each planet since a past birtday', () => {
    let pastAge = this.age
    expect(userAge.yearsGoneBy()).toEqual(3);
  })
});