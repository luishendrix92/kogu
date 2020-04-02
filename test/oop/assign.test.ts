import {assign} from "../../src";

describe("assign", () => {
  it("should work just like Object.assign", () => {
    const obj = {
      a: {
        b: {
          c: 10
        },
        c: "C"
      },
      d: true
    };

    expect(assign(obj, { a: { b: { c: 0 }} })).toEqual({
      a: {
        b: {
          c: 0
        }
      },
      d: true
    });

    expect(assign({ a: false }, { b: true })).toEqual({
      a: false, b: true
    });
  });

  it("should throw error when given null or undefined", () => {
    expect(() => assign({}, null)).toThrowError(TypeError);
    expect(() => assign(null, null)).toThrowError(TypeError);
    expect(() => assign(null, {})).toThrowError(TypeError);
    expect(() => assign(undefined, null)).toThrowError(TypeError);
    expect(() => assign(null, undefined)).toThrowError(TypeError);
    expect(() => assign(undefined, {})).toThrowError(TypeError);
    expect(() => assign({}, undefined)).toThrowError(TypeError);
  });

  it("should create a shallow copy", () => {
    const source = { foo: 10 };

    expect(assign({}, source)).not.toBe(source);
  });
});
