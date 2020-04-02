import {identity} from "../../src/";

describe("identity", () => {
  it("should return the same value/reference that was passed", () => {
    const refArray: number[] = [1, 2, 3];
    const obj: any = { name: "Charles", age: 90 };

    expect(identity(5)).toBe(5);
    expect(identity(identity)).toBe(identity);
    expect(identity(refArray)).toBe(refArray);
    expect(identity("Hello")).toBe("Hello");
    expect(identity(obj)).toBe(obj);
  });
});
