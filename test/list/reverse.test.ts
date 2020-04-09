import {reverse} from "../../src/";

describe("reverse", () => {
  it("should not mutate the original array", () => {
    const original = [1, 2, 3];
    const reversed = reverse(original);

    expect(reversed).not.toBe(original);
  });

  it("should return empty array or string when empty", () => {
    expect(reverse([])).toEqual([]);
    expect(reverse("")).toEqual("");
  });

  it("should return the same singleton (different memory address)", () => {
    expect(reverse([1])).toEqual([1]);
    expect(reverse("x")).toBe("x");
  });

  it("should reverse an array or string  with pair length", () => {
    expect(reverse([1, 2])).toEqual([2, 1]);
    expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(reverse([true, "false"])).toEqual(["false", true]);

    expect(reverse("AB")).toBe("BA");
    expect(reverse("ABCD")).toBe("DCBA");
  });

  it("should reverse an array or string with odd length", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverse([false, "true", 23, true, "odd"]))
      .toEqual(["odd", true, 23, "true", false]);

    expect(reverse("ABC")).toBe("CBA");
    expect(reverse("ABCDE")).toBe("EDCBA");
  });
});
