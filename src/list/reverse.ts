import {chars, unchars} from "../";

export function reverse(elements: string): string;
export function reverse(elements: readonly []): [];
export function reverse<T extends any>(elements: readonly T[]): T[];
/**
 * @desc
 * Takes a string or an array and reverses it. A copy
 * of the array is returned instead of mutating the
 * original; if you want the opposite behaviour
 * use `Array.prototype.reverse.call()` instead.
 * @example
 * reverse([1, 2, 3]); //> [3, 2, 1]
 * reverse([1]); //> [1]
 * reverse([]); //> []
 * reverse("mirror"); //> "rorrim"
 * reverse(""); //> ""
 * @param {string | any[]} elements - Array or string to reverse.
 * @return {string | any[]}         - Reversed string or array.
 */
export function reverse(elements: any) {
  const len = elements.length;

  if (typeof elements === "string") {
    return unchars(chars(elements).reverse());
  }

  const pivot = Math.ceil(len / 2);
  const reversed = Array(len);

  for (let l = 0, r = len - 1; l < pivot; l++, r--) {
    reversed[l] = elements[r];
    reversed[r] = elements[l];
  }

  return reversed;
}
