import {comp, identity} from "../../src/lambda";
import {foldl} from "../../src/list";
import {dec, inc} from "../../src/math";

describe("foldl", () => {
  it("should accumulate arrays of different acumulable types", () => {
    expect(foldl((a, b: number) => a + b, 0)([1,2,3]))
    .toBe(6);
    expect(foldl((a, b: string) => a + " | " + b, "A")(["B", "C"]))
    .toBe("A | B | C");
  });

  it("should have the power to compose functions", () => {
    // TODO: Implement either arity separately or foldl with an optional index.
    const arity2 = (f: any) => (...args: any[]) => f(...args.slice(0, 2));

    expect(foldl(arity2(comp), identity)([inc, dec, dec])(5)).toBe(4);
  });
});
