import {map} from "../../src/list";
import {square} from "../../src/math";
import {prop} from "../../src/oop";

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Foo", age: 15 },
  { name: "Bar", age: 23 }
];

describe("map", () => {
  test("gives its callback the current element index", () => {
    expect(map<string, number>((_, i) => i)(["first", "second"]))
    .toEqual([0, 1]);
  });

  test("will not transform an empty list into something else", () => {
    expect(map((_: any) => 0)([])).toEqual([]);
  });

  test("can transform a list of numbers", () => {
    expect(map(square)([1, 2, 3])).toEqual([1, 4, 9]);
    expect(map(square)([4.5, 5.8, -6])).toEqual([20.25, 33.64, 36]);
  });

  it("should work with partially applied functions", () => {
    expect(map(prop("name"))(people)).toEqual(["Foo", "Bar"]);
  });
});
