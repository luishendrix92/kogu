import {chars, lines, split, words} from "../../src/text";

describe("split", () => {
  it("should separate a list by commas", () => {
    expect(split(", ")("One, Two, Three")).toEqual(["One", "Two", "Three"]);
  });
});

describe("lines", () => {
  it("should return a list of lines from a regular block of text", () => {
    expect(lines("The\nQuick\nBrown\nFox"))
      .toEqual(["The", "Quick", "Brown", "Fox"])
  });

  it("should trim empty lines at both ends by default or when specified", () => {
    expect(lines("\nHello\n\nWorld\n\n")).toEqual(["Hello", "", "World"]);
    expect(lines("\nHello\n  \nWorld\n\n", true))
      .toEqual(["Hello", "  ", "World"]);
  });

  it("should not trim empty lines at both ends when specified", () => {
    expect(lines("\nHello\n\n", false)).toEqual(["", "Hello", "", ""]);
  });
});

describe("words", () => {
  it("should produce a list of words given a sentence", () => {
    expect(words("One two three")).toEqual(["One", "two", "three"]);
    expect(words(" | ")).toEqual(["", "|", ""]);
  });
});

describe("chars", () => {
  it("should produce a list of characters given a string", () => {
    expect(chars("aEi ")).toEqual(["a", "E", "i", " "]);
  });
});
