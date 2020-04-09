import {singleton} from "../../src/";

describe("singleton", () => {
  it("should return a single element array", () => {
    expect(singleton(0)).toEqual([0]);
    expect(singleton("foo")).toEqual(["foo"]);
    expect(singleton(null)).toEqual([null]);
    expect(singleton(undefined)).toEqual([undefined]);
  });

  it("should return an array of an array", () => {
    expect(singleton([])).toEqual([[]]);
  });
});
