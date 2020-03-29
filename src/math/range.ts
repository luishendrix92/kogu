import {map} from "../list";

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
export default function range(lowerLimit: number, upperLimit: number): number[] {
  const length: number = Math.abs(upperLimit - lowerLimit) + 1;
  const factor: number = lowerLimit > upperLimit ? -1 : 1;
  const result: number[] = new Array(length);

  return map((_, i) => lowerLimit + (factor * i))(result);
}
