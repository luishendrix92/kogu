/**
 * @desc
 * Binary function that does the same as the `&&` operator.
 * @example
 * and(lt(5)(3), gt(2)(4)); //> true
 * and(true, true); //> true
 * and(false, true); //> false
 * @param {boolean} a - Left-side expression.
 * @param {boolean} b - Right-side expression.
 * @return {boolean}  - Result of the logical operation.
 */
export function and(a: boolean, b: boolean): boolean {
  return a && b;
}

/**
 * @desc
 * Binary function that does the same as the `||` operator.
 * @example
 * or(lt(3)(5), gt(2)(8)); //> true
 * or(false, false); //> false
 * or(true, false); //> true
 * @param {boolean} a - Left-side expression.
 * @param {boolean} b - Right-side expression.
 * @return {boolean}  - Result of the logical operation.
 */
export function or(a: boolean, b: boolean): boolean {
  return a || b;
}
