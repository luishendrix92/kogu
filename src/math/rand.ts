/**
 * @desc
 * Generates a random decimal number from 0 to `limit` where
 * said limit is exclusive by default (this can't be changed).
 * Negative numbers are allowed, whereas zero will return zero.
 *
 * If no limit is provided, the function will behave like a
 * regular invocation to Math.random(), which produces a
 * decimal number from 0 to 1 (exclusive).
 * @example
 * rand(); //> 0.659200472384411
 * rand(100); //> 43.08636762865034
 * rand(-5); //> -4.978273764897162
 * rand(1.9); //> 1.025913286257413
 * @see {@link randInt}
 * @param  {number} [limit=1] - The upper limit (integer or not).
 * @return {number}           - The random decimal number.
 */
export function rand(limit: number = 1): number {
  return Math.random() * limit;
}

/**
 * @desc
 * Generates a random integer from 0 to `limit` where said
 * limit is exclusive by default. Negative integers are
 * allowed and will produce the expected result which is
 * a random integer from 0 to that negative number.
 * The limit exclusivity can be changed by the user with
 * an optional boolean value defaulted to `false`.
 *
 * **NOTE**: If the limit is not decimal, it will
 * be "floored" to get rid of its decimal places.
 * @example
 * randInt(100); //> 48 (range of [0, 100))
 * randInt(-10); //> -5 (range of (-10, 0])
 * randInt(5, true); //> 5 (range of [0, 5])
 * randInt(1); //> 0 (range of [0, 1))
 * randInt(0); //> 0 (always yields 0)
 * randInt(3.5, false); //> 2 (range of [0, 3))
 * @see {@link rand}
 * @param  {number}  limit             - Upper limit number.
 * @param  {boolean} [inclusive=false] - Decides if `limit` is inclusive.
 * @return {number}                    - The newly generated integer.
 */
export function randInt(limit: number, inclusive: boolean = false): number {
  if (limit === 0 || (limit === 1 && !inclusive)) {
    return 0;
  }

  const flooredLimit = Math.floor(limit);
  const limitWithoutSign = Math.abs(flooredLimit);
  const limitSign = flooredLimit / limitWithoutSign;
  const result = Math.floor(
    rand(limitWithoutSign + Number(inclusive))
  ) * limitSign;

  return result === -0 ? 0 : result;
}
