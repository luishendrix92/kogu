import {Predicate} from "../lambda";
import {foldl} from "./index";

/**
 * @desc
 * Keeps the elements of an array that match against
 * a user-supplied predicate (function that returns
 * a boolean) and discards the ones that don't.
 *
 * The callback function gets invoked with two
 * arguments: the current element in the array
 * and its corresponding zero-based index.
 *
 * **NOTE**: This function does not mutate the original array.
 * @example
 * const productList: Product[] = [
 *  { productId: 1, defective: true },
 *  { productId: 2, defective: false },
 *  { productId: 3, defective: true }
 * ];
 *
 * filter(propEq("defective", false))(productList)
 * //> [{ productId: 2, defective: false }]
 * @param {function(x: T, i: number): boolean} pred - Predicate callback function.
 * @return {function(xs: T[]): T[]}                 - A function that accepts the list.
 */
export default function filter<T>(pred: Predicate<T>) {
  return function filter__(elements: T[]): T[] {
    return foldl<T[], T>((filtered, element, index) => {
      if (pred(element, index)) {
        filtered.push(element);
      }

      return filtered;
    }, [])(elements);
  }
}
