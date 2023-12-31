export class AgeCalc {
  constructor(currentAge, pastAge, futureAge) {
    this.currentAge = currentAge;
    this.pastAge = pastAge;
    this.futureAge = futureAge;
    this.ageConversion = {
      mercury: 0.24,
      venus: 0.62,
      mars: 1.88,
      jupiter: 11.86,
    };
  }
  ageOnPlanet(planet) {
    let conversionNumber = this.ageConversion[planet];
    return this.currentAge * conversionNumber;
  }
  yearsGoneBy(planet) {
    let difference = this.currentAge - this.pastAge;
    return difference * this.ageConversion[planet];
  }
  yearsToCome(planet) {
    let difference = this.futureAge - this.currentAge;
    return difference * this.ageConversion[planet];

  }
}