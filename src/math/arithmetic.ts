/**
 * @desc
 * Takes a number and subtracts 1 from it.
 * @example
 * dec(0.33); //> -0.33
 * dec(15); //> 14
 * dec(-10); //> -11
 * @param {number} n - The number to decrement.
 * @return {number}  - The decremented number.
 */
export function dec(n: number): number {
  return n - 1;
}

/**
 * @desc
 * Takes a number and adds 1 to it.
 * @example
 * inc(-5); //> -4
 * inc(0); //> 1
 * inc(12.5); //> 13.5
 * @param {number} n - The number to increment.
 * @return {number}  - The incremented number.
 */
export function inc(n: number): number {
  return n + 1;
}

/**
 * @desc
 * Multiplies a number by itself.
 * @example
 * square(0) + square(1); //> 1
 * square(5); //> 25
 * square(-5); //> 25
 * @param {number} n - The number to square.
 * @return {number}  - The squared number.
 */
export function square(n: number): number {
  return n * n;
}

/**
 * @desc
 * Takes a number and flips its sign. This means that
 * a positive number will become negative, a negative
 * number will become positive, and zero won't change.
 * @example
 * neg(0) === neg(-0) === 0; //> true
 * neg(42); //> -42
 * neg(-42); //> 42
 * @param {number} n - The number to negate.
 * @return {number}  - The number with its sign flipped.
 */
export function neg(n: number): number {
  return 0 - n;
}
