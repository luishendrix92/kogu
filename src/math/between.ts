/**
 * @desc
 * Returns a function that keeps a number from being lower or
 * higher than the specified **boundaries**. This function is also
 * called `clamp` in other APIs and utility libraries. If you
 * only need to contain lower and upper limits separately, use
 * the partially applied versions of `max` and `min` instead.
 *
 * **Note**: The order of the two arguments is merely symbolic,
 * they will be flipped if `lower` is greater than `upper`.
 * @example
 * between(0, 10)(12); //> 10
 * between(-10, 0)(-15); //> -10
 * between(-1, 1)(0); //> 0
 * between(5, 5)(5); //> 5
 * @param {number} lower - Lower limit.
 * @param {number} upper - Upper limit.
 * @return {function(n: number): number}
 * Function that returns `lower` if `n < lower`, `upper` if
 * `n > upper` or just `n` otherwise.
 */
export function between(lower: number, upper: number) {
  return function between__(n: number): number {
    if (lower > upper) {
      [lower, upper] = [upper, lower];
    }

    return Math.min(upper, Math.max(lower, n));
  }
}
