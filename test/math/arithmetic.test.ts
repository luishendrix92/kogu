import {dec, inc, neg, square} from "../../src/";

describe("dec", () => {
  it("should subtract 1 to a positive number", () => {
    expect(dec(90)).toBe(89);
    expect(dec(0)).toBe(-1);
  });

  it("should decrement a negative number", () => {
    expect(dec(-5)).toBe(-6);
  });
});

describe("inc", () => {
  it("should add 1 to a positive number", () => {
    expect(inc(5)).toBe(6);
    expect(inc(0)).toBe(1);
  });

  it("should increment a negative number", () => {
    expect(inc(-6)).toBe(-5);
  });
});

describe("neg", () => {
  it("should transform a positive number into a negative", () => {
    expect(neg(26)).toBe(-26);
  });

  it("should transform a negative number into a positive", () => {
    expect(neg(-85)).toBe(85);
  });

  it("should not affect zero", () => {
    expect(neg(0)).toBe(0);
  });
});

describe("square", () => {
  it("should multiply a number by itself", () => {
    expect(square(5)).toBe(25);
    expect(square(-5)).toBe(25);
    expect(square(0)).toBe(0);
    expect(square(0.5)).toBeCloseTo(0.25);
  });
});

