import {foldl, Mapper} from "../";

/**
 * @desc
 * Mapping is a process in which an element gets **transformed** into
 * another element of the same or different type. This function
 * applies a *mapper* to a list of elements and returns a new
 * list with the results of each mapper. The mapper receives
 * the current element and the index for each iteration.
 *
 * **NOTE**: This function does not mutate the original array.
 * @example
 * const nums: number[] = [1, 2, 3];
 *
 * map((x: string, i) => `${i} | ${x}`)(nums)
 * //> ["0 | 1", "1 | 2", "2 | 3"]
 * map(square)(nums); //> [1, 4, 9]
 *
 * // It follows the functor laws pretty well:
 * comp(map(inc), map(inc))(nums); //> [3, 4, 5]
 * map(comp(inc, inc))(nums); //> [3, 4, 5]
 *
 * map(identity)(nums); //> [1, 2, 3]
 * identity(nums); //> [1, 2, 3]
 * @see https://en.wikipedia.org/wiki/Map_(mathematics)
 * @param {function(x: A): B} mapper - Tertiary mapper function.
 * @return {function(xs: A[]): B[]}  - Function that accepts the list.
 */
export function map<A, B>(mapper: Mapper<A, B>) {
  return function map__(elements: A[]): B[] {
    return foldl<B[], A>((mapped, element, index) => {
      mapped.push(mapper(element, index));

      return mapped;
    }, [])(elements);
  }
}
