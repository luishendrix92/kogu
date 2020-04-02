import {filter, identity} from "../../src/";

describe("filter", () => {
  it("should keep the elements that match a predicate", () => {
    expect(filter<boolean>(identity)([true, false])).toEqual([true]);
    expect(filter((n: number) => n < 4)([1,2,3,4,5])).toHaveLength(3);
    expect(filter((s: string, i) => s.length > i)(["", "Two"]))
    .toHaveLength(1);
  });

  it("should not touch an empty array", () => {
    expect(filter(() => true)([])).toHaveLength(0);
  });
});
