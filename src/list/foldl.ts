import {Reducer} from "../lambda";

/**
 * Folds a list from left to right using an initial value to
 * accumulate an eventual result. It's similar to `reduce`
 * although the initial value is obligatory.
 * @param reducer Binary function that serves as a reducer.
 * @param initial Initial value for the accumulation.
 */
export default function foldl<R, T>(reducer: Reducer<R, T>, initial: R) {
  return function foldl__(elements: T[]): R {
    const length = elements.length;
    let reduced: R = initial;

    for (let i = 0; i < length; i++) {
      reduced = reducer(reduced, elements[i], i);
    }

    return reduced;
  }
}
