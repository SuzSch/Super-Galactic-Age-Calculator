export class AgeCalc {
  constructor(earthAge) {
    this.age = earthAge;
  }
  mercuryAge() {
    return this.age * .24;
  }
};