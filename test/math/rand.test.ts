import {rand, randInt} from "../../src/math";

describe("rand", () => {
  it("should return a value less than 1 when given no arguments", () => {
    expect(rand()).toBeLessThan(1);
  });

  it("should produce a number less than the limit", () => {
    expect(rand(5)).toBeLessThan(5);
  });
});

describe("randInt", () => {
  it("should produce a whole random number", () => {
    expect(randInt(5)).toBeLessThan(5);
    expect(randInt(10) % 1).toBe(0);
  });

  it("should be able to have an inclusive limit", () => {
    expect(randInt(2, true)).toBeLessThanOrEqual(2);
  });

  it("should work with negative integers.", () => {
    expect(randInt(-5)).toBeGreaterThan(-5);
  });
});
