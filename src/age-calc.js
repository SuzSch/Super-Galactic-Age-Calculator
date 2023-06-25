export class AgeCalc {
  constructor(currentAge, pastAge) {
    this.currentAge = currentAge;
    this.pastAge = pastAge;
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

}
  // mercuryAge() {
  //   return this.age * .24;
  // }
  // venusAge() {
  //   return this.age * .62;
  // }
  // marsAge() {
  //   return this.age * 1.88;
  // }
  // jupiterAge() {
  //   return this.age * 11.86;
  // }