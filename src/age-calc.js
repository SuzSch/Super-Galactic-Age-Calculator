export class AgeCalc {
  constructor(earthAge) {
    this.age = earthAge;
  }
  mercuryAge() {
    return this.age * .24;
  }
  venusAge() {
    return this.age * .62;
  }
  marsAge() {
    return this.age * 1.88;
  }
  jupiterAge() {
  }
};