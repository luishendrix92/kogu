import {transpose} from "../../src/";

describe("transpose", () => {
  it("should transpose a matrix of 2x3", () => {
    const matrix = [
      [1, false, "3"],
      ["0", { a: 3 } , null]
    ]; // 2 x 3
    const transposed = transpose(matrix);

    expect(transposed).not.toBe(matrix);
    expect(transposed).toEqual([
      [1, "0"],
      [false, { a: 3 }],
      ["3", null]
    ]);
  });

  it("should fill holes with undefined", () => {
    expect(transpose([[1, 2, 3], [1, 2]]))
      .toEqual([[1, 1], [2, 2], [3, undefined]]);
  });

  it("should throw when undefined or null in the matrix", () => {
    // @ts-ignore
    expect(() => transpose([false, [1, 2]])).toThrowError(TypeError);
    // @ts-ignore
    expect(() => transpose([[1, 2], null])).toThrowError(TypeError);
  });
});
