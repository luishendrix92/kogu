import {inc, noop, update} from "../../src/";

describe("update", () => {
  it("should increment a numerical property", () => {
    const obj: { count: number, name: string } = {
      count: 5,
      name: "counter"
    };
    const updated = update(inc, "count")(obj);

    expect(updated.count).toBe(6);
  });

  it("should apply extra arguments correctly", () => {
    const obj: { prop: string, a: any[] } = { prop: "val", a: [] };
    const dummyFunc = (x: string, y: number, z: boolean): string => {
      return `x = ${x}, y = ${y}, z = ${z}`;
    };

    expect(update(dummyFunc, "prop", 10, false)(obj)).toEqual({
      prop: `x = val, y = 10, z = false`,
      a: []
    });
  });

  it("should throw an error on missing keys", () => {
    // @ts-ignore
    expect(() => update(noop, "not-present")({ present: true }))
      .toThrow(TypeError);
  });
});
