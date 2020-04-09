import {between} from "../../src/";

describe("between", () => {
  it("should validate the provided examples", () => {
    const e1: number = between(0, 10)(12);
    const e2: number = between(-10, 0)(-15);
    const e3: number = between(-1, 1)(0);
    const e4: number = between(5, 5)(5);

    expect(e1).toBe(10);
    expect(e2).toBe(-10);
    expect(e3).toBe(0);
    expect(e4).toBe(5);
  });

  it("should not care about the argument order", () => {
    expect(between(5, -5)(16)).toBe(5);
    expect(between(5, 0)(-1)).toBe(0);
    expect(between(4, -1)(3)).toBe(3);
  });
});
