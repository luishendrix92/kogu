import {dec, inc, juxt, range, square} from "../../src";

describe("juxt", () => {
  it("should work with single-arity functions with 1 argument", () => {
    expect(juxt([inc, dec, square])(5)).toEqual([6, 4, 25]);
  });
  it("should apply separate arguments to a list of functions", () => {
    const bounds = juxt([Math.min, Math.max])(
      ...range(10, -10)
    );

    expect(bounds).toEqual([-10, 10]);
  });

  it("should require the first function's parameter signature to match the argument list", () => {
    expect(juxt([Math.pow, inc])(2, 4)).toEqual([16, 3]);
  });
});
