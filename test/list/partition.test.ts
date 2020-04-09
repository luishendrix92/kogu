import {partition, range} from "../../src/";

describe("partition", () => {
  it("should partition an array of elements", () => {
    expect(partition(3)(range(0, 8)))
      .toEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8]]);
  });

  it("should partition an array of N elements into a singleton chunk", () => {
    expect(partition(3)(range(0, 2)))
      .toEqual([[0, 1, 2]]);
  });

  it("should return an empty array when 'elements' is empty", () => {
    expect(partition(4)([])).toHaveLength(0);
  });

  it("should return singletons when n is 1", () => {
    expect(partition(1)([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  it("should throw RangeError when n is less than 1", () => {
    expect(() => partition(0)([1, 2, 3])).toThrowError(RangeError);
    expect(() => partition(-1)([1, 2, 3])).toThrowError(RangeError);
  });

  it("should skip elements when 'step' is positive", () => {
    expect(partition(3, 1)(range(0, 6)))
      .toEqual([[0, 1, 2], [4, 5, 6]]);
    expect(partition(3, 1)(range(0, 7)))
      .toEqual([[0, 1, 2], [4, 5, 6]]);
    expect(partition(3, 1)(range(0, 8)))
      .toEqual([[0, 1, 2], [4, 5, 6], [8]]);

    expect(partition(3, 2)(range(0, 6)))
      .toEqual([[0, 1, 2], [5, 6]]);
    expect(partition(3, 2)(range(0, 7)))
      .toEqual([[0, 1, 2], [5, 6, 7]]);
    expect(partition(3, 2)(range(0, 8)))
      .toEqual([[0, 1, 2], [5, 6, 7]]);
    expect(partition(3, 2)(range(0, 10)))
      .toEqual([[0, 1, 2], [5, 6, 7], [10]]);

    expect(partition(1, 1)(range(0, 3)))
      .toEqual([[0], [2]]);
    expect(partition(1, 2)(range(0, 3)))
      .toEqual([[0], [3]]);
    expect(partition(1, 3)(range(0, 3)))
      .toEqual([[0]]);
  });

  it("should repeat elements when 'step' is negative", () => {
    expect(partition(3, -1)(range(0, 6)))
      .toEqual([[0, 1, 2], [2, 3, 4], [4, 5, 6], [6]]);
    expect(partition(3, -1)(range(0, 7)))
      .toEqual([[0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7]]);
    expect(partition(3, -1)(range(0, 8)))
      .toEqual([[0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 8], [8]]);

    expect(partition(3, -2)(range(0, 2)))
      .toEqual([[0, 1, 2], [1, 2], [2]]);
    expect(partition(3, -2)(range(0, 3)))
      .toEqual([[0, 1, 2], [1, 2, 3], [2, 3], [3]]);
  });

  it("should return all the elements in a singleton if n > length", () => {
    expect(partition(4)([1, 2, 3])).toEqual([[1, 2, 3]]);
  });

  it("should check for when step is negative and <= -N", () => {
    expect(() => partition(5, -5)(range(0, 20)))
      .toThrowError(RangeError);
    expect(() => partition(5, -6)(range(0, 20)))
      .toThrowError(RangeError);
  });
});
