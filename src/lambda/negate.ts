/**
 * Takes a function that returns a boolean, and returns another
 * function that returns the negated value of said boolean.
 * @param assertion The variadic predicate function.
 */
export default function negate<A extends any[]>(assertion: (...args: A) => boolean) {
  return function negate__(...args: A): boolean {
    return !(assertion(...args));
  }
}
