import {map} from "../list";

/**
 * Creates an array of numbers from A to B in sequential order.
 * When the lower limit is greater than the upper limit, the order
 * of appearance gets reversed. Equal limits produce a singleton array.
 * TODO: Make the second argument optional so that lowerLimit becomes 0.
 * @param lowerLimit The first number that will appear on the array.
 * @param upperLimit The last number that will appear on the array.
 */
export default function range(lowerLimit: number, upperLimit: number): number[] {
  const length: number = Math.abs(upperLimit - lowerLimit) + 1;
  const factor: number = lowerLimit > upperLimit ? -1 : 1;
  const result: number[] = new Array(length);

  return map((_, i) => lowerLimit + (factor * i))(result);
}
