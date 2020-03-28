import {constant} from "../../src/lambda";
import {map} from "../../src/list";

describe("constant", () => {
  it("should always return the same value", () => {
    expect(constant(100)()).toBe(100);
    expect(constant("Hey")()).toBe("Hey");
    expect(constant(false)()).toBe(false);
  });

  it("should always return the same reference", () => {
    const [ref1, ref2] = [[1,2,3], { foo: "bar" }];

    expect(constant(ref1)()).toBe(ref1);
    expect(constant(ref2)()).toBe(ref2);
  });

  it("should ignore incoming arguments inside the resulting function", () => {
    const zero = constant(0);

    expect(map(zero)([1, 2])).toEqual([0, 0]);
  });
});
