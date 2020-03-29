/**
 * @desc
 * Accepts a predicate function (produces a boolean value) and returns
 * another predicate function that accepts the same arguments but
 * returns the negated boolean (`true->false` and `false->true`).
 * @example
 * const isOldEnough = (age: number) => age >= 18;
 * const isUnderage = negate(isOldEnough);
 *
 * isOldEnough(30); //> true
 * isOldEnough(15); //> false
 * isUnderage(15); //> true
 * isUnderage(30); //> false
 * @param {function(x: ...any): boolean} assertion - The variadic predicate function.
 * @return {function(y: ...any): boolean}          - The negated predicate function.
 */
export default function negate<A extends any[]>(assertion: (...args: A) => boolean) {
  return function negate__(...args: A): boolean {
    return !(assertion(...args));
  }
}
