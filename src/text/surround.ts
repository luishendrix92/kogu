/**
 * Surrounds a string with the provided left and right substrings.
 * If the right substring wasn't provided, the left one will be used.
 * @param left  Element to place on the left.
 * @param right Substring to place on the right (optional).
 */
export default function surround(left: string, right?: string) {
  return function surround__(text: string): string {
    if (right === void 0) { right = left }

    return left + text + right;
  }
}
