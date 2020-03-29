/**
 * @desc
 * Returns the first argument passed to it and ignores the rest.
 *
 * It may not seem useful at first, but you can use it in a pipeline
 * or think of it as the absolute unit of **function composition**.
 * For example, you can implement `compose` in the **Haskell**
 * language using `id`: `compose = foldl (.) id` since `(.)`
 * is an infix binary function (takes only two arguments).
 * @example
 * const refObj = { prop: "Value" };
 *
 * filter(identity)([true, false]) //> [true]
 * identity(refObj) === refObj //> true
 * identity(5) //> 5
 * @see https://en.wikipedia.org/wiki/Identity_function
 * @param {T} value - The value to return.
 * @return {T}      - The value that you passed.
 */
export default function identity<T>(value: T): T {
  return value;
}
