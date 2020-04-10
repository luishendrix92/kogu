import {chars, chr, map, ord, pipe, unchars} from "../../src/";

describe("ord", () => {
  it("should convert a single-length string to number", () => {
    expect(ord("@")).toBe(64);
    expect(ord("A")).toBe(65);
  });

  it("should convert a string's first character to number", () => {
    expect(ord("@x")).toBe(64);
    expect(ord("Ax")).toBe(65);
  });

  it("should be useful with iterative functions for emoji handling", () => {
    expect(pipe(chars, map(ord))("😈")).toEqual([55357, 56840]);
  });

  it("should throw Error when the string is empty", () => {
    expect(() => ord("")).toThrowError(Error);
  });
});

describe("chr", () => {
  it("should convert a number to string", () => {
    expect(chr(65)).toBe("A");
    expect(chr(230)).toBe("æ");
  });

  it("should be useful with iterative functions for emoji handling", () => {
    const joy = [108, 105, 116, 32, 55357, 56834 ];

    expect(pipe(map(chr), unchars)(joy)).toBe("lit 😂");
  });
});
