import {map} from './list';

export function inc(n: number): number {
  return n + 1;
}

export function dec(n: number): number {
  return n - 1;
}

export function neg(n: number): number {
  return 0 - n;
}

export function square(n: number): number {
  return n * n;
}

export function rand(limit: number = 1): number {
  return Math.random() * limit;
}

export function randInt(limit: number, inclusive: boolean = false): number {
  return Math.floor(rand(limit + Number(inclusive)));
}

/**
 * Creates an array of numbers from A to B in sequential order.
 * When the lower limit is greater than the upper limit, the order
 * of appearance gets reversed. Equal limits produce a singleton array.
 * TODO: Make the second argument optional so that lowerLimit becomes 0.
 * @param lowerLimit The first number that will appear on the array.
 * @param upperLimit The last number that will appear on the array.
 */
export function range(lowerLimit: number, upperLimit: number): number[] {
  const length: number = Math.abs(upperLimit - lowerLimit) + 1;
  const factor: number = lowerLimit > upperLimit ? -1 : 1;
  const result: number[] = new Array(length);

  return map((_, i) => lowerLimit + (factor * i))(result);
}
