export function first(elements: string): string;
export function first(elements: readonly []): undefined;
export function first<T extends any>(elements: readonly T[]): T;
/**
 * @desc
 * Returns the first element of an array or a string. If the
 * array is empty, you will get `undefined` in return; if
 * the string is empty, you will get `""` instead.
 * @example
 * first([false, 0, null]); //> false
 * first([1, 2, 3]); //> 1
 * first("Captain"); //> "C"
 * first([]); //> undefined
 * first(""); //> ""
 * @see {@link last}
 * @param {string | any[]} elements - Array or string.
 * @return {string | any | undefined}
 * The first element of an array or string; undefined if empty.
 */
export function first(elements: any) {
  const len = elements.length;
  const tOf = typeof elements;

  if (len === 0) {
    if (tOf === "string") {
      return "";
    }

    return undefined;
  }

  return elements[0];
}

export function last(elements: string): string;
export function last(elements: readonly []): undefined;
export function last<T extends any>(elements: readonly T[]): T;
/**
 * @desc
 * Returns the last element of an array or a string. If the
 * array is empty, you will get `undefined` in return; if
 * the string is empty, you will get `""` instead.
 * @example
 * last(["1", "2", "3"]); //> "3"
 * last("The Last of Us"); //> "s"
 * last([true]); //> true
 * last([]); //> undefined
 * last(""); //> ""
 * @see {@link first}
 * @param {string | any[]} elements - Array or string.
 * @return {string | any | undefined}
 * The last element in the array or string.
 */
export function last(elements: any) {
  const len = elements.length;
  const tOf = typeof elements;

  if (len === 0) {
    if (tOf === "string") {
      return "";
    }

    return undefined;
  }

  return elements[len - 1];
}

export function rest(elements: string): string;
export function rest(elements: readonly []): [];
export function rest<T extends any>(elements: readonly T[]): T[];
/**
 * @desc
 * Takes an array or a string and returns all its elements
 * excluding the first one. Other languages might call this
 * function "tail." If you pass it a string, and it's empty,
 * you will get an empty string in return.
 * @example
 * rest([1, 2, "3"]); //> [2, "3"]
 * rest([2, 3]); //> [3]
 * rest([1]); //> []
 * rest([]); //> []
 * rest("ABC"); //> "BC"
 * rest(""); //> ""
 * @see {@link butLast}
 * @param {string | any[]} elements - Array or string.
 * @return {string | any[]}         - The tail of the array or string.
 */
export function rest(elements: any) {
  return elements.slice(1);
}

export function butLast(elements: string): string;
export function butLast(elements: readonly []): [];
export function butLast<T extends any>(elements: readonly T[]): T[];
/**
 * @desc
 * Takes an array or a string and returns all its elements
 * excluding the last one. Other languages might call this
 * function "init." If you pass it a string, and it's empty,
 * you will get an empty string in return.
 * @example
 * butLast([1, 2, "3"]); //> [1, 2]
 * butLast([2, 3]); //> [2]
 * butLast([1]); //> []
 * butLast([]); //> []
 * butLast("ABC"); //> "AB"
 * butLast(""); //> ""
 * @see {@link rest}
 * @param {string | any[]} elements - Array or string.
 * @return {string | any[]}         - All elements but the last one.
 */
export function butLast(elements: any) {
  const len = elements.length;

  return elements.slice(0, len - 1);
}
