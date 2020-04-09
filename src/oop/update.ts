/**
 * @desc
 * Updates an object by applying a function to the value
 * of a given key and setting the new value. If the key
 * doesn't exist in the object, it will throw an error.
 * First, we pass an updater function, a property key
 * (usually a string) and extra arguments to apply to
 * said function; and then we get a function that
 * accepts the object to update.
 *
 * **Note for TypeScript users**: This partially applied
 * version is a bit limited in terms of type inference
 * and checking, and the return type of the updater
 * function **MUST** be **EXACTLY THE SAME** as the
 * type of the property value inside the object.
 * You can help TypeScript by being explicit about
 * the updater's parameter types, and you can also
 * describe the generic type of `update` as follows:
 * `update<"key", [...a], T>(f, "key", ...a)(obj);`
 * @example
 * const changeVersion = (n: string, v: number) =>
 *   n.replace(/\d+/, v);
 * const game: Game = {
 *   releaseYear: 1998,
 *   name: "Resident Evil 3",
 *   replayable: true
 * };
 *
 * // Original object mutates!
 * update(inc, "releaseYear")(game);
 * update(changeVersion, "name", 7)(game);
 * //> Game { releaseYear: 1999
 * //>      , name: "Resident Evil 7"
 * //>      , replayable: true }
 * @see {@link assoc}
 * @throws {TypeError} - When the provided key doesn't exist in the object.
 * @param {function(val: T, ...args: A): T} func - Updater function.
 * @param {K extends PropertyKey}           key  - A key in the object.
 * @param {A extends any[]}                 args - Extra arguments for `func`.
 * @return {function(obj: O extends Record<K, T>): O}
 * Setter that returns the object after mutating the property's value.
 */
export function update<K extends PropertyKey, A extends any[], T>(
  func: (val: T, ...args: A) => T,
  key: K,
  ...args: A
) {
  return function update__<O extends Record<K, T>>(obj: O): O {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      throw new TypeError(`[update]: Key "${key}" doesn't exist in the object.`);
    }

    obj[key] = func(obj[key], ...args) as O[K];

    return obj;
  }
}
