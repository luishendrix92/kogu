import {degToRad, radToDeg} from "../../src/math";

describe("degToRad", () => {
  it("should follow the unitary circle conversion", () => {
    expect(degToRad(0)).toBe(0);
    expect(degToRad(15)).toBeCloseTo(0.261799, 6);
    expect(degToRad(30)).toBeCloseTo(0.523599, 6);
    expect(degToRad(45)).toBeCloseTo(0.785398, 6);
    expect(degToRad(60)).toBeCloseTo(1.0472, 4);
    expect(degToRad(75)).toBeCloseTo(1.309, 3);
    expect(degToRad(90)).toBeCloseTo(1.5708, 4);
    expect(degToRad(105)).toBeCloseTo(1.8326, 4);
    expect(degToRad(360)).toBeCloseTo(6.28319, 5);
  });
});

describe("radToDeg", () => {
  it("should ", () => {
    expect(radToDeg(0)).toBe(0);
    expect(radToDeg(Math.PI / 12)).toBeCloseTo(15);
    expect(radToDeg(Math.PI / 6)).toBeCloseTo(30);
    expect(radToDeg(Math.PI / 4)).toBeCloseTo(45);
    expect(radToDeg(Math.PI * 2)).toBeCloseTo(360);
  });
});
