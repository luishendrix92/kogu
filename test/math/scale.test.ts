import {scale} from "../../src/";

describe("scale", () => {
  it("should map values inside the range", () => {
    expect(scale(0, 100, 5, 6)(5)).toBe(0);
    expect(scale(0, 100, 5, 6)(5.5)).toBe(50);
    expect(scale(0, 100, 5, 6)(6)).toBe(100);

    expect(scale(5, 6, 0, 100)(0)).toBe(5);
    expect(scale(5, 6, 0, 100)(50)).toBe(5.5);
    expect(scale(5, 6, 0, 100)(100)).toBe(6);
  });

  it("should map values outside the range", () => {
    expect(scale(-1, 1, 0, 20)(40)).toBe(3);
    expect(scale(-1, 1, 0, 20)(-20)).toBe(-3);
  });

  it("should reverse a-b ordering if a > b", () => {
    expect(scale(100, 0, 0, 10)(7)).toBe(70);
    expect(scale(0, 100, 10, 0)(7)).toBe(70);
  });

  it("should always return x when left range's distance is 0", () => {
    expect(scale(5, 5, 0, 10)(3)).toBe(5);
  });

  it("should throw RangeError when right range has no distance", () => {
    expect(() => scale(5, 0, 10, 10)(5)).toThrowError(RangeError);
    expect(() => scale(5, 0, 10, 10)(10)).toThrowError(RangeError);
    expect(() => scale(5, 0, 10, 10)(12)).toThrowError(RangeError);
  });
});
