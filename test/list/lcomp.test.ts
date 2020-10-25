import {inc, lcomp, noop} from "../../src/";

describe("lcomp", () => {
  it("should map the only list inside a list with f", () => {
    expect(lcomp(inc)([[1, 2, 3]])).toEqual([2, 3, 4]);
    expect(lcomp(inc)([[]])).toEqual([]);
  });

  it("should return empty list when empty list is provided", () => {
    // @ts-ignore
    expect(lcomp(noop)([])).toEqual([]);
  });

  it("should comprehend lists from 2 up to 5", () => {
    const [A, B, C, D, E] = [
      [1, 2],
      [3, 4, 5],
      [6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20]
    ];

    expect(lcomp((a: number, b: number) => a * b)([A, B]))
      .toEqual([3, 4, 5, 6, 8, 10]);
    expect(lcomp((a: number, b: number, c: number) => a * b * c)([A, B, C]))
      .toHaveLength(A.length * B.length * C.length);
    expect(lcomp((a: number, b: number, c: number, d: number) => a * b * c * d)
      ([A, B, C, D]))
      .toHaveLength(A.length * B.length * C.length * D.length);
    expect(lcomp((a: number, b: number, c: number, d: number, e: number) =>
      a * b * c * d * e)([A, B, C, D, E]))
      .toHaveLength(A.length * B.length * C.length * D.length * E.length);
  });

  it("should throw when amount of lists if length exceeds 5", () => {
    // @ts-ignore
    expect(() => lcomp(Math.max)([[1], [2], [3], [4], [5], [6]]))
      .toThrowError(RangeError);
  });
});
