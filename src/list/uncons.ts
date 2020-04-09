import {first, rest} from "../";

/**
 * @desc
 * Returns a tuple (array of length 2) with the first
 * element being the head of the provided array and
 * the second being the tail. This function comes
 * from the Haskell programming language.
 * @example
 * uncons([1, 2, 3]); //> [1, [2, 3]]
 * uncons([1, 2]); //> [1, [2]]
 * uncons([1]); //> [1, []]
 * uncons([]); //> [undefined, []]
 * @param {any[]} elements - The Array or elements.
 * @return {any[][]}       - Head and tail of the array.
 */
export function uncons<T extends any>(elements: T[]) {
  return [first(elements), rest(elements)];
}
