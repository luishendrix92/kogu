import {butLast, first, last, rest} from "../../src/";

describe("first", () => {
  it("should return undefined or empty string when empty", () => {
    expect(first([])).toBeUndefined();
    expect(first("")).toBe("");
  });

  it("should return the first element of an array or string", () => {
    expect(first([1,2,3])).toBe(1);
    expect(first([false, "foo"])).toBe(false);
    expect(first(["singleton"])).toBe("singleton");
    expect(first("S")).toBe("S");
  });
});

describe("last", () => {
  it("should return undefined or empty string when empty", () => {
    expect(last([])).toBeUndefined();
    expect(last("")).toBe("");
  });

  it("should return the last element of an array or string", () => {
    expect(last([1,2,3])).toBe(3);
    expect(last("bar")).toBe("r");
    expect(last(["Singleton"])).toBe("Singleton");
    expect(last("S")).toBe("S");
  });
});

describe("rest", () => {
  it("should return empty string or array when empty", () => {
    expect(rest([])).toHaveLength(0);
    expect(rest("")).toHaveLength(0);
  });

  it("should return empty string or array when singleton", () => {
    expect(rest([1])).toHaveLength(0);
    expect(rest("S")).toHaveLength(0);
  });

  it("should return all elements but the first one", () => {
    expect(rest([1, 2])).toEqual([2]);
    expect(rest([1,2,3])).toEqual([2, 3]);
    expect(rest("12")).toBe("2");
    expect(rest("123")).toBe("23");
  });
});

describe("butLast", () => {
  it("should return empty string or array when empty", () => {
    expect(butLast([])).toHaveLength(0);
    expect(butLast("")).toHaveLength(0);
  });

  it("should return empty string or array when singleton", () => {
    expect(butLast([0])).toHaveLength(0);
    expect(butLast("S")).toHaveLength(0);
  });

  it("should return all the elements but the last one", () => {
    expect(butLast([1, 2])).toEqual([1]);
    expect(butLast([1, 2, 3])).toEqual([1, 2]);
    expect(butLast("12")).toBe("1");
    expect(butLast("123")).toBe("12");
  });
});
