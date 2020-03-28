import {comp, pipe} from "../../src/lambda";
import {dec, inc, square} from "../../src/math";
import {split, unchars, unwords, words} from "../../src/text";

describe("compose", () => {
  it("should compose two or more functions of the same return type", () => {
    expect(comp(square, inc)(5)).toBe(36);
    expect(comp(inc, (x) => x / 2, square)(6)).toBe(19);
    expect(comp(square, inc, dec, dec)(5)).toBe(16);
    expect(comp(square, inc, dec, inc, inc)(5)).toBe(49);
  });

  it("should compose two functions of different return types", () => {
    expect(comp(String, Math.sqrt)(25)).toBe("5");
    expect(comp(unwords, words, unchars)(split("")("Hi You"))).toBe("Hi You");
    expect(comp(String, dec, Number, Boolean)("")).toBe("-1");
    expect(comp(String, inc, Number, Boolean, dec)(1)).toBe("1");
  });
});

describe("pipe", () => {
  it("should sequence two or more functions of the same return type", () => {
    expect(pipe(square, inc)(5)).toBe(26);
    expect(pipe(inc, (x) => x / 2, square)(6)).toBeCloseTo(12.25);
    expect(pipe(square, inc, dec, dec)(5)).toBe(24);
    expect(pipe(square, inc, dec, inc, inc)(5)).toBe(27);
  });

  it("should sequence two or more functions of different return types", () => {
    expect(pipe(Math.sqrt, String)(25)).toBe("5");
    expect(pipe(unwords, words, unchars)(["[", "]"])).toBe("[]");
    expect(pipe(dec, Number, Boolean, String)(-10)).toBe("true");
    expect(pipe(inc, Boolean, Number, dec, String)(3)).toBe("0");
  });
});
