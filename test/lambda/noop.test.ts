import {noop} from "../../src/lambda";
import {map} from "../../src/list";

describe("noop", () => {
  it("should always return undefined with or without arguments", () => {
    expect(noop()).toBeUndefined();
    expect(map(noop)([1, 2])).toEqual([undefined, undefined]);
  });
});
