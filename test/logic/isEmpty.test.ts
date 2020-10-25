import {isEmpty} from "../../src/";

describe("isEmpty", () => {
  it("should check the length of a string", () => {
    expect(isEmpty("Modicum")).toBeFalsy();
    expect(isEmpty("")).toBeTruthy();
  });

  it("should check the length of an array", () => {
    expect(isEmpty([undefined])).toBeFalsy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty(new Array(5))).toBeTruthy();
  });

  it("should check for empty json objects", () => {
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty({ a: 5 })).toBeFalsy();
  });

  it("should always return true and not throw for primitives", () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(5)).toBeTruthy();
    expect(isEmpty(new Date())).toBeTruthy();
    expect(isEmpty(NaN)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(false)).toBeTruthy();
  });
});
