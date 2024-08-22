const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const res = calculateNumber(3, 2);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1.3, 4.2);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(4.6, 2.7);
      assert.strictEqual(res, 8);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(0, 0);
      assert.strictEqual(res, 0);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-4.6, -2.7);
      assert.strictEqual(res, -8);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-4.1, -2.3);
	assert.strictEqual(res, -6);
    });
});
