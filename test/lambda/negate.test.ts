import {negate} from "../../src/lambda";

describe("negate", () => {
  it("should flip the boolean result of Boolean", () => {
    expect(negate(Boolean)(5)).toBeFalsy();
  });

  it("should work with multi-arity functions", () => {
    const isUnderage = (age: number): boolean => age < 18;
    const randomTest = (str: string, len: number) => str.length === len;

    expect(negate(randomTest)("foo", 3)).toBeFalsy();
    expect(negate(isUnderage)(21)).toBeTruthy();
  });
});
