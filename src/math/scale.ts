/**
 * @desc
 * Takes two intervals [a1, b1], [a2, b2] in the form of four
 * separate arguments and returns a function that accepts a
 * number that is in line with the second interval's scale
 * and returns the equivalent number in terms of the first
 * interval's scale. Inspired by a function demonstrated by
 * **Daniel Shiffman** in a **Coding Train** video.
 *
 * **Note**: If `a2` and `b2` are the same, the function will
 * throw a RangeError to prevent `Infinity` and `NaN`.
 * @example
 * scale(0, 100, 0, 1)(0.5); //> 50
 * scale(-10, 10, -2, -1)(-1.5); //> 0
 * scale(0, 10, 0, 1)(-1); //> -10
 * scale(0, 10, 0, 1)(2); //> 20
 * scale(0.25, 0.5, 0, 255)(250);
 * //> 0.4950980392156863
 * @see https://youtu.be/6z7GQewK-Ks?t=593
 * @see https://p5js.org/reference/#/p5/map
 * @throws {RangeError} - When a2 and b2 are the same.
 * @param {number} a1   - First range's left side.
 * @param {number} b1   - First range's right side.
 * @param {number} a2   - Second range's left side.
 * @param {number} b2   - Second range's right side.
 * @return {function(x: number): number}
 * Function that takes the number "x" in terms of the second interval.
 */
export function scale(a1: number, b1: number, a2: number, b2: number) {
  if (a2 - b2 === 0 || a2 - b2 === -0) {
    throw new RangeError("[scale]: Right-side range can't have equal limits.");
  }

  if (a1 > b1) {
    [a1, b1] = [b1, a1];
  }

  if (a2 > b2) {
    [a2, b2] = [b2, a2];
  }

  return function scale__(x: number): number {
    return a1 + (((x - a2) / (b2 - a2)) * (b1 - a1));
  }
}
