/**
 * @desc
 * Also known as the "null function" or "**no op**eration", always
 * returns the value `undefined` and does absolutely nothing.
 * @example
 * map(noop)(Array(2)); //> [undefined, undefined]
 * noop(); //> undefined
 * @see https://en.wikipedia.org/wiki/Null_function
 * @return {undefined} - Has return type void.
 */
export default function noop(): void {
  return undefined;
}
