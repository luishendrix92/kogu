/**
 * @desc
 * Accepts any arbitrary object or value and returns a
 * function that will always return said object every
 * time it gets called regardless of its arguments.
 * @example
 * const zero = constant(0);
 * const listOfZeros = map(zero)(Array(3)); //> [0, 0, 0]
 *
 * constant(listOfZeros)() === listOfZeros //> true
 * @param {T} element      - The object or value that will be returned.
 * @return {function(): T} - A getter that produces the same result.
 */
export default function constant<T>(element: T) {
  return function constant__(): T {
    return element;
  }
}
