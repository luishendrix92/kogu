/**
 * @desc
 * Curried function that first takes a function, then returns another
 * function that accepts `f`'s arguments and lastly, returns a
 * function that takes no arguments and returns the application
 * of the provided arguments to `f`. This is useful for lazy
 * evaluation and delaying the execution of the function.
 * @example
 * describe("myFunc", () => {
 *   it("should throw error", () => {
 *     expect(thunkF(myFunc)("bad argument"))
 *       .toThrowError(BadArgError);
 *   });
 * }); //! [PASS]
 *
 * thunkF(inc)(1)(); //> 2
 * @see {@link thunkV}
 * @param {function(args: ...any): any} f - A function to be called later.
 * @return {function(args: ...any): function(): any}
 * A function that takes no arguments and returns the result of calling f.
 */
export function thunkF<T extends any, A extends any[]>(f: (...args: A) => T) {
  return function thunkF__(...args: A) {
    return (): T => f(...args);
  }
}

/**
 * @desc
 * Takes any value or reference and returns a callable function
 * that takes no arguments and returns that very same value.
 * In functional programming this is called a **thunk**,
 * and it's very useful for lazy evaluation.
 * @example
 * const song = thunkV("Call me maybe...");
 *
 * song(); //> "Call me maybe..."
 * thunkV(true)(); //> true
 * @see {@link thunkF}
 * @see https://en.wikipedia.org/wiki/Thunk
 * @param {any} val          - The value to return later.
 * @return {function(): any} - The thunk that returns the value.
 */
export function thunkV<T>(val: T) {
  return (): T => val;
}
