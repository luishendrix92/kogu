import {Producer} from "../";

/**
 * @desc
 * Runs a function a certain amount of times and returns an array
 * containing the return values of each invocation. It can be
 * useful when running functions that are impure (have side
 * effects) or produce mutable objects or arrays.
 * @example
 * // Simulated dice roll session (4 times)
 * repeatedly(() => randInt(6), 4); //> [2, 1, 3, 5]
 * @throws {Error}               - When the argument `times` is negative.
 * @throws {Error}               - When `times` is not a whole number.
 * @param {function(): T} effect - Callback with potential side effects and optional return value.
 * @param {number}        times  - Amount of times the callback will be run.
 * @return {T[]}                 - The collected results of each invocation.
 */
export function repeatedly<T>(effect: Producer<T>, times: number): T[] {
  if (times < 0) {
    throw new Error('[repeatedly]: Argument "times" must not be negative.');
  } else if (times % 1 !== 0) {
    throw new Error('[repeatedly]: Argument "times" must not be a decimal.');
  }

  const collectedResults: T[] = Array(times);

  for (let i = 0; i < times; i++) {
    collectedResults[i] = effect();
  }

  return collectedResults
}
