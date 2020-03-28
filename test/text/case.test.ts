import {capitalize, caselessEq, flipCase, titleCase} from "../../src/text";

describe("capitalize", () => {
  it("should uppercase a single-character string", () => {
    expect(capitalize("o")).toBe("O");
  });

  it("should not affect an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should properly capitalize a string", () => {
    expect(capitalize("woRd")).toBe("Word");
  });
});

describe("flipCase", () => {
  it("should work with one character", () => {
    expect(flipCase("a") + flipCase("B")).toBe("Ab");
  });

  it("should work with more than one character", () => {
    expect(flipCase("cRaZy Ca$$Se")).toBe("CrAzY cA$$sE");
    expect(flipCase("TEST")).toBe("test");
  });
});

describe("titleCase", () => {
  it("should capitalize a single-word string", () => {
    expect(titleCase("wOrD")).toBe("Word");
    expect(titleCase(" wOrD ")).toBe(" Word ");
  });

  it("should capitalize a string with more than one word", () => {
    expect(titleCase("two woRDs")).toBe("Two Words");
    expect(titleCase("my o'reilly books")).toBe("My O'reilly Books");
  });

  it("should not affect empty strings", () => {
    expect(titleCase("")).toBe("");
    expect(titleCase(" ")).toBe(" ");
    expect(titleCase(" \n ")).toBe(" \n ");
  });
});

describe("caselessEq", () => {
  it("should match two words with different casing", () => {
    expect(caselessEq("Equal", "equal")).toBeTruthy();
    expect(caselessEq("equal", "Equal")).toBeTruthy();
    expect(caselessEq("eQuAl", "EqUaL")).toBeTruthy();
  });

  it("should not match completely different words", () => {
    expect(caselessEq("Not", "toN")).toBeFalsy();
    expect(caselessEq("DiFFErenT", "WORDS")).toBeFalsy();
  });

  it("can ignore non-alphanumeric chars for less strict matching", () => {
    expect(caselessEq("<>Equal<>", "??eqUAL!!", true)).toBeTruthy();
    expect(caselessEq("<>Equal<>", "??eqUAL!!", false)).toBeFalsy();
    expect(caselessEq("a|b|c", "A.b;C", true)).toBeTruthy();
  });

  it("should compare two empty strings as equal", () => {
    expect(caselessEq("", "")).toBeTruthy();
  });
});
