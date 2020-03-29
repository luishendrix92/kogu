import {join, unchars, unlines, unwords} from "../../src/text";

describe("join", () => {
  it("should join a list by commas", () => {
    expect(join(", ")(["One", "Two", "Three"])).toBe("One, Two, Three");
  });

  it("should return a singleton's only element", () => {
    expect(join("-")(["SINGLETON"])).toBe("SINGLETON");
  });

  it("should return an empty string for an empty list", () => {
    expect(join(" || ")([])).toBe("");
  });
});

describe("unlines", () => {
  it("should join a list of lines into a block of text", () => {
    expect(unlines(["Hello darkness", "My old friend..."]))
      .toBe("Hello darkness\nMy old friend...");
    expect(unlines(["", "WoW", "", ""])).toBe("\nWoW\n\n");
  });
});

describe("unwords", () => {
  it("should join a list of words into a full sentence", () => {
    expect(unwords(["Jest", "rocks!"])).toBe("Jest rocks!");
    expect(unwords(["", " both ends ", " "])).toBe("  both ends   ");
    expect(unwords(["", "", "Trailing", "", "Space"]))
      .toBe("  Trailing  Space");
  });
});

describe("unchars", () => {
  it("should join a list of characters into a string", () => {
    expect(unchars(["u", "n", "c", "h", "a", "r", "s"])).toBe("unchars");
  });
});
