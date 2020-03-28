import {and, or} from "../../src/logic";

describe("and", () => {
  it("should follow the truth AND truth table with two arguments", () => {
    expect(and(true, true)).toBeTruthy();
    expect(and(true, false)).toBeFalsy();
    expect(and(false, false)).toBeFalsy();
    expect(and(false, true)).toBeFalsy();
  });
});

describe("or", () => {
  it("should follow the OR truth table with two arguments", () => {
    expect(or(true, true)).toBeTruthy();
    expect(or(true, false)).toBeTruthy();
    expect(or(false, false)).toBeFalsy();
    expect(or(false, true)).toBeTruthy();
  });
});
