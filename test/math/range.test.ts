import {inRange, range} from "../../src/";

describe("range", () => {
  it("should create a range from 0 to N", () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("should create a range from -N to 0", () => {
    expect(range(-5, 0)).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  it("should create a range from N1 to N2", () => {
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it("should create a range from -B to B, -C or -A", () => {
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
    expect(range(-2, -4)).toEqual([-2, -3, -4]);
    expect(range(-4, -2)).toEqual([-4, -3, -2]);
  });

  it("should create a reverse range when A > B", () => {
    expect(range(5, 0)).toEqual([5, 4, 3, 2, 1, 0]);
    expect(range(10, 5)).toEqual([10, 9, 8, 7, 6, 5]);
    expect(range(2, -2)).toEqual([2, 1, 0, -1, -2]);
    expect(range(0, -5)).toEqual([0, -1, -2, -3, -4, -5]);
  });

  it("should create a singleton array when both limits are equal", () => {
    expect(range(5, 5)).toEqual([5]);
    expect(range(0, 0)).toEqual([0]);
    expect(range(0, -0)).toEqual([0]);
    expect(range(-5, -5)).toEqual([-5]);
  });
});

describe("inRange", () => {
  it("should test for 0 to positive range inclusion", () => {
    expect(inRange(0, 5)(2.5)).toBeTruthy();
    expect(inRange(0, 5)(0)).toBeTruthy();
    expect(inRange(0, 5)(5)).toBeTruthy();
    expect(inRange(0, 5)(-0.01)).toBeFalsy();
    expect(inRange(0, 5)(5.01)).toBeFalsy();
  });

  it("should test for negative to 0 range inclusion", () => {
    expect(inRange(-5, 0)(-2.5)).toBeTruthy();
    expect(inRange(-5, 0)(0)).toBeTruthy();
    expect(inRange(-5, 0)(-5)).toBeTruthy();
    expect(inRange(-5, 0)(-5.01)).toBeFalsy();
    expect(inRange(-5, 0)(0.01)).toBeFalsy();
  });

  it("should test for negative to positive range inclusion", () => {
    expect(inRange(-5, 5)(0)).toBeTruthy();
    expect(inRange(-5, 5)(-5)).toBeTruthy();
    expect(inRange(-5, 5)(5)).toBeTruthy();
    expect(inRange(-5, 5)(-5.01)).toBeFalsy();
    expect(inRange(-5, 5)(5.01)).toBeFalsy();
  });

  it("should support both limits being the same", () => {
    expect(inRange(5, 5)(5)).toBeTruthy();
    expect(inRange(5, 5)(6)).toBeFalsy();
    expect(inRange(5, 5)(4.99)).toBeFalsy();
  });

  it("should support both limits being inverted", () => {
    expect(inRange(6, 4)(7)).toBeFalsy();
    expect(inRange(6, 4)(5)).toBeTruthy();
    expect(inRange(6, 4)(2)).toBeFalsy();
    expect(inRange(-2, -6)(0)).toBeFalsy();
    expect(inRange(-2, -6)(-1)).toBeFalsy();
    expect(inRange(-2, -6)(-5)).toBeTruthy();
  });
});
