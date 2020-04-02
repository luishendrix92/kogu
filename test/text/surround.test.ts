import {surround} from "../../src/";

describe("surround", () => {
  it("should add a given substring to the left and right", () => {
    expect(surround("o")("O")).toBe("oOo");
    expect(surround("")("untouched")).toBe("untouched");
  });

  it("should surround a string with the provided left and right substrings", () => {
    expect(surround("<li>", "</li>")("item")).toBe("<li>item</li>");
    expect(surround("", "")("intact")).toBe("intact");
  });

  it("should surround an empty string leaving only the surroundings", () => {
    expect(surround("Left>", "<Right")("")).toBe("Left><Right");
  });
});
