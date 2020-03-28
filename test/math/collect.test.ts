import {product, sum} from "../../src/math";

describe("product", () => {
  it("should multiply a list of numbers", () => {
    expect(product([2, 5, 10, -3, 0.5])).toBe(-150);
    expect(product([5, 0, -5])).toBe(0);
  });

  it("should return the only one number a list has", () => {
    expect(product([100])).toBe(100);
  });

  it("should return 1 when the list is empty", () => {
    expect(product([])).toBe(1);
  });
});

describe("sum", () => {
  it("should add together a list of numbers", () => {
    expect(sum([10, 20, 30])).toBe(60);
    expect(sum([10, 5, -5])).toBe(10);
  });

  it("should return the only one number a list has", () => {
    expect(sum([100])).toBe(100);
  });

  it("should return 0 when the list is empty", () => {
    expect(sum([])).toBe(0);
  });
});
