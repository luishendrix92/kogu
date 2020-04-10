import {identity} from "../";

/**
 * @desc
 * Takes a dictionary (object literal) where the keys are the
 * parameters, and their values are assigned to the parameter
 * after the `=` sign, and returns a **query string** that
 * can be appended to a URL for example.
 *
 * You can specify whether you want to use `encodeURIComponent`
 * on the key-value pairs or not, it's `true` by default.
 * @example
 * query({
 *   limit: 10,
 *   author: 5,
 *   order: true
 * });
 * //> "?limit=10&author=5&order=true"
 *
 * query({ part: " snippet" });
 * //> "?part=%20snippet"
 * query({}); //> ""
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 * @param {object}  params     - Object literal with the params.
 * @param {boolean} [euc=true] - Option to use encodeURIComponent.
 * @return {string}            - The standalone query string.
 */
export function query(params: Record<string, any>, euc: boolean = true): string {
  const encoder = euc ? encodeURIComponent : identity;
  let result = "";

  for (const key in params) {
    /* istanbul ignore next */
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const [param, value] = [key.toString(), params[key].toString()];

      result += result === "" ? "?" : "&";
      result += `${encoder(param)}=${encoder(value)}`;
    }
  }

  return result;
}
