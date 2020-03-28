/**
 * @desc
 * No description
 * @todo Describe this function.
 * @param  {number} [limit=1] - VOID
 * @return {number}           - VOID
 */
export function rand(limit: number = 1): number {
  return Math.random() * limit;
}

/**
 * @desc
 * Generates a random integer from 0 to `limit`
 * where said limit is exclusive by default.
 * @example
 * let myClass = new MyClass();
 * let result = myClass.foo();
 * console.log(result);
 * @param  {number}  limit             - Upper limit number.
 * @param  {boolean} [inclusive=false] - Decides if `limit` is inclusive.
 * @return {number}                    - The newly generated integer.
 */
export function randInt(limit: number, inclusive: boolean = false): number {
  return Math.floor(rand(limit + Number(inclusive)));
}
