import {map, noop} from "../../src";

describe("noop", () => {
  it("should always return undefined with or without arguments", () => {
    expect(noop()).toBeUndefined();
    expect(map(noop)([1, 2])).toEqual([undefined, undefined]);
  });
});
