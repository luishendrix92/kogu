import {noop, range, thunkF, thunkV, trim} from "../../src/";

function _badCode(badArg: number): number {
  if (badArg <= 0) {
    throw new Error("You are bad, and you should feel bad...");
  }

  return 0;
}

describe("thunkF", () => {
  it("should work with no arguments", () => {
    expect(thunkF(noop)()()).toBeUndefined();
  });

  it("should receive and apply arguments accordingly", () => {
    const runMe = thunkF(trim)("  trimmed  \n");
    const runMe2 = thunkF(range)(0, 5);

    expect(runMe).toHaveLength(0);
    expect(runMe()).toBe("trimmed");
    expect(runMe2()).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("should be useful for Jest error throw assertion", () => {
    expect(thunkF(_badCode)(-1)).toThrowError(Error);
  });
});

describe("thunkV", () => {
  it("should delay the return of a value", () => {
    const giveMe2 = thunkV(2);

    expect(giveMe2()).toBe(2);
    expect(thunkV(null)()).toBeNull();
    expect(giveMe2).toHaveLength(0);
  });
});
