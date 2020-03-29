import {trunc} from "../../src/text";

describe("trunc", () => {
  const text = "123456789";

  it("should not touch the text when the limit is >= length", () => {
    expect(trunc(10)(text)).toBe(text);
    expect(trunc(9)(text)).toBe(text);
  });

  it("should truncate a string with its terminator when suited", () => {
    expect(trunc(8)(text)).toBe("12345...");
    expect(trunc(5, "")(text)).toBe("12345");
    expect(trunc(5, ".")(text)).toBe("1234.");
  });

  it("should return the terminator when the limit = terminator length", () => {
    expect(trunc(5, "-----")("123456")).toBe("-----");
  });

  it("should return empty string when terminator length > limit", () => {
    expect(trunc(1, "!!")("><")).toBe("");
  });

  it("should return empty string when limit <= 0", () => {
    expect(trunc(0)("FOO")).toBe("");
    expect(trunc(-5, ".")("BAR")).toBe("");
  });
});
