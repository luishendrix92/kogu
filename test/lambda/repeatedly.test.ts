import {noop, randInt, repeatedly, sum} from "../../src/";

describe("repeatedly", () => {
  it("should run a void function and produce a list of undefined values", () => {
    expect(repeatedly(noop, 3)).toEqual([undefined, undefined, undefined]);
  });

  it("should be able to produce different random numbers", () => {
    expect(sum(repeatedly(() => randInt(100, true), 2)))
    .toBeLessThanOrEqual(200);
  });

  it("should return an empty list when argument 'times' is 0", () => {
    expect(repeatedly(noop, 0)).toEqual([]);
  });

  it("should throw an error when attempting to run the function less than 0 times", () => {
    expect(() => repeatedly(noop, -5)).toThrow();
  });

  it("should throw an error when the amount is decimal", () => {
    expect(() => repeatedly(noop, 0.5)).toThrow();
    expect(() => repeatedly(noop, 5.99)).toThrow();
  });
});
