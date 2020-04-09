import {map} from "../";

/**
 * @desc
 * Creates an array of numbers from A to B in sequential order.
 * When the lower limit is greater than the upper limit, the order of
 * appearance gets reversed. Equal limits produce a singleton array.
 *
 * **NOTE**: The upper limit is inclusive and this can't be changed.
 * @example
 * range(3, 0); //> [3, 2, 1, 0]
 * range(3, 6); //> [3, 4, 5, 6]
 * range(-3, -6); //> [-3, -4, -5, -6]
 * range(-6, -3); //> [-6, -5, -4, -3]
 * range(-1, 1); //> [-1, 0, 1]
 * range(1, -1); //> [1, 0, -1]
 * @todo Make the second argument optional so that lowerLimit becomes 0.
 * @param {number} lowerLimit - The first number that will appear on the array.
 * @param {number} upperLimit - The last number that will appear on the array.
 * @return {number[]}         - An array of numbers that represents the range.
 */
export function range(lowerLimit: number, upperLimit: number): number[] {
  const length: number = Math.abs(upperLimit - lowerLimit) + 1;
  const factor: number = lowerLimit > upperLimit ? -1 : 1;
  const result: number[] = new Array(length);

  return map((_, i) => lowerLimit + (factor * i))(result);
}

/**
 * @desc
 * Takes two numbers: a lower limit and an upper limit.
 * Returns a predicate function that receives a number
 * and checks if the number is contained in the range
 * of `[a, b]` so both limits are inclusive, which
 * means `>=` and `<=` are used to compare.
 * @example
 * inRange(0, 10)(5); //> true
 * inRange(-1, 1)(2); //> false
 * inRange(-5, -3)(-4); //> true
 * inRange(5, 5)(5.01); //> false
 * inRange(5, 0)(3); //> true
 * @param {number} a - The lower limit (inclusive).
 * @param {number} b - The upper limit (inclusive).
 * @return {function(x: number): boolean}
 * The predicate function that checks the range inclusion of x.
 */
export function inRange(a: number, b: number) {
  return function inRange__(x: number): boolean {
    if (a > b) {
      [a, b] = [b, a];
    }

    return x >= a && x <= b;
  }
}
