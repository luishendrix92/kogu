import {map} from "../";

export function juxt<A extends any[], R1, R2, R3, R4, R5>(funcs: [(...args: A) => R1, (...args: A) => R2, (...args: A) => R3, (...args: A) => R4, (...args: A) => R5]): (...args: A) => [R1, R2, R3, R4, R5];
export function juxt<A extends any[], R1, R2, R3, R4>(funcs: [(...args: A) => R1, (...args: A) => R2, (...args: A) => R3, (...args: A) => R4]): (...args: A) => [R1, R2, R3, R4];
export function juxt<A extends any[], R1, R2, R3>(funcs: [(...args: A) => R1, (...args: A) => R2, (...args: A) => R3]): (...args: A) => [R1, R2, R3];
export function juxt<A extends any[], R1, R2>(funcs: [(...args: A) => R1, (...args: A) => R2]): (...args: A) => [R1, R2];
export function juxt<A extends any[], R1>(funcs: [(...args: A) => R1]): (...args: A) => [R1];
/**
 * @desc
 * Receives an **array of functions** and returns a function that
 * is the juxtaposition of those functions. The returned function
 * takes separate arguments and applies them to each function, thus
 * returning an array that contains the results.
 *
 * The current typed overloads only provide partial type
 * checking for **1 to 5 functions**. If you use lambdas
 * instead of named functions, you must specify the same
 * arguments and its types as the ones you passed to
 * the function that receives and applies them.
 *
 * **Note**: The first function in the list needs the exact
 * parameter types as the arguments in the inner function.
 * @example
 * const bounds = juxt([Math.min, Math.max]);
 *
 * bounds(...range(10, -10)); //> [-10, 10]
 * juxt([inc, dec, square])(5); //> [6, 4, 25]
 * juxt([reverse, length])("Clojure");
 * //> ["erujolC", 7]
 * juxt([add, neg])(9, 6); //> [15, -9]
 * @param {function[]} funcs - The list of functions.
 * @return {function}
 * A function that applies its arguments to each function in the list.
 */
export function juxt<A extends any[], R>(funcs: Array<(...args: A) => R>) {
  return function juxt__(...args: A): R[] {
    return map((f: (...args: A) => R) => f(...args))(funcs);
  }
}
