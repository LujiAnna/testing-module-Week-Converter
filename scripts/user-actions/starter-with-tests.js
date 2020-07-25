"use strict";
console.log("--- loading: display array");

describe("converts weeks into other time units", () => {
  describe("converts weeks into days", () => {
    it("calculates right amount of days", () => {
      weeks = 3;
      const expectedResult = 21;
      const actualResult = daysConverter(weeks);
      assert.strictEqual(expectedResult, actualResult);
    });
    it("takes amount of weeks as default value", () => {
      const expectedResult = 7 * weeks;
      const actualResult = daysConverter(weeks);
      assert.strictEqual(expectedResult, actualResult);
    });
  });
});
