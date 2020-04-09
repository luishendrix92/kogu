/**
 * @desc
 * Tests whether an object is empty or not. To check
 * if it's empty, it counts its keys using a `for-in`
 * loop instead of just using `.length`.
 *
 * **Note**: The justification for checking the key
 * amount is to support objects as well as arrays,
 * and this edge case: `Array(5)` doesn't have keys.
 * Also, primitives, `undefined`, `null`, `NaN` and
 * anything that doesn't have keys will return `true`.
 * @example
 * isEmpty([1, 2, 3]); //> false
 * isEmpty([]); //> true
 * isEmpty("Not empty"); //> false
 * isEmpty(""); //> true
 * isEmpty({}); //> true
 * isEmpty(Array(5)); //> true
 * isEmpty(45); //> true
 * @param {any} obj  - Object that may be empty.
 * @return {boolean} - Result of the emptiness test.
 */
export function isEmpty(obj: any): boolean {
  obj = Object(obj);

  for (const key in obj) {
    /* istanbul ignore next */
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}
