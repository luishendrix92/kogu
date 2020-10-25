import {frequencies} from "../../src/";

describe("frequencies", () => {
  it("should count elements in an array regardless of type", () => {
    expect(frequencies([1, 2, 3, 3, 3, 2])).toEqual({
      1: 1, 2: 2, 3: 3
    });

    expect(frequencies([true, null, undefined, true, "x"])).toEqual({
      true: 2, null: 1, undefined: 1, x: 1
    });

    expect(frequencies([1])).toEqual({ 1: 1 });
  });

  it("should return an empty record when array is empty", () => {
    expect(frequencies([])).toEqual({});
  });
});
