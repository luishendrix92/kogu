import {prop} from "../../src/oop";

const car = {
  brand: "Ford", year: 2015,
  describe(): string {
    return "I have a " + this.brand + " from " + this.year + "!";
  }
};

describe("prop", () => {
  it("should obtain prop value from JSON object", () => {
    const getAge = prop("age");
    const getName = prop("name");

    expect(getAge({ name: "Luis", age: 25 })).toBe(25);
    expect(getName({ name: "Andrea" })).toBe("Andrea");
  });

  it("should obtain prop value from known data type", () => {
    expect(prop("length")("lovecraft")).toBe(9);
  });

  it("should fetch a method for further invocation", () => {
    const describe = prop("describe")(car);

    expect(describe.bind(car)()).toBe("I have a Ford from 2015!");
  });
});
