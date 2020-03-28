import {isBlank, trim} from "../../src/text";

describe("isBlank", () => {
  it("should return false for strings with at least one non-whitespace character", () => {
    expect(isBlank(" x ")).toBeFalsy();
    expect(isBlank(("Dog "))).toBeFalsy();
  });

  it("should return true for strings that only contain whitespace characters", () => {
    expect(isBlank(" ")).toBeTruthy();
    expect(isBlank("\n")).toBeTruthy();
    expect(isBlank("   \r")).toBeTruthy();
  });

  it("should return true for empty strings", () => {
    expect(isBlank("")).toBeTruthy();
  });
});

describe("trim", () => {
  it("should remove right, and left trailing spaces if any", () => {
    expect(trim("  Left")).toBe("Left");
    expect(trim("Right  ")).toBe("Right");
    expect(trim("  Both  ")).toBe("Both");
  });

  it("should also trim new-line characters and tabs", () => {
    expect(trim("\t\t\nLine\n\n\r")).toBe("Line");
  });

  it("should not remove internal whitespace", () => {
    expect(trim("   Hey Jude\nDon't make it bad   "))
      .toBe("Hey Jude\nDon't make it bad");
  });
});
