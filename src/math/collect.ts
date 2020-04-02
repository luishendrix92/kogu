import {foldl} from "../";

/**
 * @desc
 * Takes a list of numbers and adds them all together.
 * An empty list will result in 0.
 * @example
 * sum(range(0, 10)); //> 55
 * sum([-1, 2, 3.5]); //> 4.5
 * sum([256]); //> 256
 * sum([]); //> 0
 * @see {@link product}
 * @param {number[]} numbers - The list of numbers to add together.
 * @return {number}          - The resulting sum.
 */
export function sum(numbers: number[]): number {
  return foldl((acc, n: number) => acc + n, 0)(numbers);
}

/**
 * @desc
 * Takes a list of numbers and multiplies them all together.
 * An empty list will result in 1.
 * @example
 * const factorial = (num: number) =>
 *   product(range(1, n));
 *
 * factorial(5); //> 120
 * product([10, 0, 5]); //> 0
 * product([5]); //> 5
 * product([]); //> 1
 * @see {@link sum}
 * @todo [Optimization] Make use of short-circuiting when it finds a 0.
 * @param {number[]} factors - The list of numbers to multiply.
 * @return {number}          - The resulting product.
 */
export function product(factors: number[]): number {
  const result = foldl((acc, n: number) => acc * n, 1)(factors);

  return result === -0 ? 0 : result;
}
