import {foldl} from "../list";

/**
 * Takes a list of numbers and adds them all together.
 * An empty list will result in 0.
 * @param numbers The list of numbers to add together.
 */
export function sum(numbers: number[]): number {
  return foldl((acc, n: number) => acc + n, 0)(numbers);
}

/**
 * Takes a list of numbers and multiplies them all together.
 * An empty list will result in 1.
 * TODO: Make use of short-circuiting to stop at 0.
 * @param factors
 */
export function product(factors: number[]): number {
  const result = foldl((acc, n: number) => acc * n, 1)(factors);

  return result === -0 ? 0 : result;
}
