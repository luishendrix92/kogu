import {assoc} from "../../src/";

class Person {
  private readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `I am ${this.name}, ${this.age} years old.`;
  }
}

describe("assoc", () => {
  it("should work with array keys", () => {
    expect(assoc(0, "FIRST")(["first", "SECOND"]))
      .toEqual(["FIRST", "SECOND"]);
  });

  it("should add or change a key value pair", () => {
    const assocD = assoc("baz", "qux")({ foo: "bar" });

    expect(assocD).toHaveProperty("baz");
    expect(assocD.baz).toBe("qux");
    expect(assoc("foo", 10)(assocD).foo).toBe(10);
  });

  it("should preserve the object's prototype", () => {
    const me: Person = assoc("age", 15)(new Person("Luis", 27));

    expect(assoc("age", 28)(me).describe()).toBe("I am Luis, 28 years old.");
  });
});
