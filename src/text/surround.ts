/**
 * @desc
 * Surrounds a string with the provided left and right substrings.
 * If the right substring wasn't provided, the left one will be used.
 * @example
 * const li = surround("<li>", "</li>");
 *
 * map(li)(range(0, 1));
 * //> ["<li>0</li>", "<li>1</li>"]
 *
 * surround("__")("proto"); //> "__proto__"
 * @param {string} left    - Element to place on the left.
 * @param {string} [right] - Substring to place on the right (optional).
 * @return {function(text: string): string}
 * A function that receives the text to surround.
 */
export function surround(left: string, right?: string) {
  return function surround__(text: string): string {
    if (right === void 0) { right = left }

    return left + text + right;
  }
}
