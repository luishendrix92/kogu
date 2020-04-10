import {query} from "../../src/";

describe("query", () => {
  it("should make a query string out of 2+ key-value pairs", () => {
    expect(query({ a: 1, b: 2, c: false })).toBe("?a=1&b=2&c=false");
    expect(query({ foo: "bar", baz: "qux" })).toBe("?foo=bar&baz=qux");
  });

  it("should not add & if there is only one key-value pair", () => {
    expect(query({ a: 1 })).toBe("?a=1");
  });

  it("should return empty string if no key-value pairs", () => {
    expect(query({})).toBe("");
  });

  it("should encode special URL characters", () => {
    expect(query({ encoded: "enc&oded?yes =no"}))
      .toBe("?encoded=enc%26oded%3Fyes%20%3Dno");
    expect(query({ "w h o": true })).toBe("?w%20h%20o=true");
  });

  it("should be able to opt out of encoding", () => {
    expect(query({ encoded: "enc&oded?yes =no"}, false))
      .toBe("?encoded=enc&oded?yes =no");
    expect(query({ "w h o": true }, false)).toBe("?w h o=true");
  });
});
