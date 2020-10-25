import {map} from "../";

export function lcomp<A, R>(f: (a: A) => R): (lists: [A[]]) => R[];
export function lcomp<A, B, R>(f: (a: A, b: B) => R): (lists: [A[], B[]]) => R[];
export function lcomp<A, B, C, R>(f: (a: A, b: B, c: C) => R): (lists: [A[], B[], C[]]) => R[];
export function lcomp<A, B, C, D, R>(f: (a: A, b: B, c: C, d: D) => R): (lists: [A[], B[], C[], D[]]) => R[];
export function lcomp<A, B, C, D, E, R>(f: (a: A, b: B, c: C, d: D, e: E) => R): (lists: [A[], B[], C[], D[], E[]]) => R[];
/**
 * @desc
 * List comprehension function (without guard) that takes a
 * function with 1 to 5 arguments and returns a function that
 * receives a list of lists (up to 5 lists) and returns a
 * list that contains the result of applying the function
 * to the product of all the lists.
 *
 * **Note**: Typescript will enforce the limitation but
 * pure JavaScript will throw an error when you pass
 * more than 5 lists. Also, the types of the functions
 * will dictate the type shape of the 2D array, so they
 * must be properly annotated.
 * @example
 * const descrBook = (
 *   title: string,
 *   year: number,
 *   author: string
 * ): string =>
 *   `${title} by ${author} on ${year}`;
 *
 * // Product: 1 x 3 x 2 = 6
 * lcomp(descrBook)([
 *   ["The Book"],
 *   [1995, 2005, 2020],
 *   ["Me", "You"]
 * ]);
 * //> [ "The Book by Me on 1995"
 * //> , "The Book by You on 1995"
 * //> , "The Book by Me on 2005"
 * //> , "The Book by You on 2005"
 * //> , "The Book by Me on 2020"
 * //> , "The Book by You on 2020" ]
 * @see https://wiki.haskell.org/List_comprehension
 * @throws {RangeError} - When there are more than 5 lists.
 * @param {function(...args: any[]): any} f
 * The function to use during comprehension.
 * @return {function([any[]]): any[]}
 * Lists to comprehend (can't be > 5).
 */
export function lcomp(f: any) {
  return function lcomp__(lists: any) {
    const listCount = lists.length;

    if (listCount === 0) {
      return []
    } else if (listCount === 1) {
      return map((x) => f(x))(lists[0]);
    } else if (listCount > 5) {
      throw new RangeError("[lcomp]: Number of lists to comprehend can't be > 5.");
    }

    const results: any[] = [];

    for (let a = 0, len1 = lists[0].length; a < len1; a += 1) {
      for (let b = 0, len2 = lists[1].length; b < len2; b += 1) {
        if (listCount > 2) {
          for (let c = 0, len3= lists[2].length; c < len3; c += 1) {
            if (listCount > 3) {
              for (let d = 0, len4 = lists[3].length; d < len4; d += 1) {
                if (listCount > 4) {
                  for (let e = 0, len5 = lists[4].length; e < len5; e += 1) {
                    results.push(f(
                      lists[0][a],
                      lists[1][b],
                      lists[2][c],
                      lists[3][d],
                      lists[4][e]
                    ));
                  }
                } else {
                  results.push(f(
                    lists[0][a],
                    lists[1][b],
                    lists[2][c],
                    lists[3][d]
                  ));
                }
              }
            } else {
              results.push(f(lists[0][a], lists[1][b], lists[2][c]));
            }
          }
        } else {
          results.push(f(lists[0][a], lists[1][b]));
        }
      }
    }

    return results;
  }
}
