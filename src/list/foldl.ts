import {Reducer} from "../lambda";

/**
 * @desc
 * Folds a list from left to right using an initial value to
 * accumulate an eventual result. It's similar to `reduce`
 * although the initial value is obligatory.
 *
 * The reducer is a tertiary function whose first argument
 * is the accumulated value, the second argument is the
 * current iterated element, and lastly, the index.
 * The return value of this reducer must be of the
 * same type as the accumulated value.
 * @example
 * foldl(add, 50)(range(1, 3)); //> 56
 *
 * foldl<string, number>(
 *  (acc, _, i) => acc + i,
 *  "Indexes: "
 * )(repeatedly(noop, 5));
 * //> "Indexes: 01234"
 * @todo Make the index-passing optional.
 * @param {function(acc: R, x: T, i: number): R} reducer - Tertiary reducer function.
 * @param {R}                                    initial - Initial value for accumulation.
 * @return {function(xs: T[]): R}                        - A function that accepts the array.
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
