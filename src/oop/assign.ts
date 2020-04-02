/**
 * @desc
 * Super simplified version of `Object.assign` which all it does
 * is take the enumerable "own properties" (using a `for in` loop)
 * from a source object and assign the key-value pairs to a target
 * object using bracket notation. It can also be used to create
 * a shallow copy of an object with `assign({}, obj)`.
 * @example
 * const source = { a: 5, b: { c: 1 } };
 *
 * assign({}, source) === source; //> false
 * assign({}, source).b === source.b; // true
 * assign({ d: true }, source);
 * //> { d: true, a: 5, b: { c: 1 } }
 * assign(source, { d: "D" });
 * //> { d: "D", a: 5, b: { c: 1 } }
 * //* Note: [source] mutated.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @param {T} target - Object that will receive key-value pairs.
 * @param {S} source - Object that will provide the key value-pairs.
 * @return {T & S} - A union of objects.
 */
export function assign<T, S>(target: T, source: S): T & S {
  if (
    target === null ||
    target === undefined ||
    source === null ||
    source === undefined
  ) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const result = Object(target);

  for (const p in source) {
    /* istanbul ignore next */
    if (Object.prototype.hasOwnProperty.call(source, p)) {
      result[p] = source[p];
    }
  }

  return result;
}
