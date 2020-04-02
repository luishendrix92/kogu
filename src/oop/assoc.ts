import {assign} from "../";

/**
 * @desc
 * Takes a key-value pair as separate arguments and then returns
 * a setter function that **mutates** the provided object by either
 * adding a new key to it and setting its value or changing the
 * current value of that key if it exists (**mutates the object**).
 *
 * This function preserves the **prototype** of the object and works
 * well with arrays which can be used in place of `arr[idx] = ?`.
 * @example
 * const author = new Person("Stephen King", 72);
 *
 * assoc("age", 25)(author);
 * //> Person { name: "Stephen King", age: 25 }
 * assoc("books", ["It"])(author);
 * //> Person { name: "Stephen King"
 * //>        , books: ["It"]
 * //>        , age: 25 }
 * assoc(0, -5)([5, 6, 7]); //> [-5, 6, 7]
 * @param {K extends keyof any} key   - Key to replace or insert.
 * @param {V} value - Associated value to the key.
 * @return {function(obj: T): T & Record<K, V>}
 * A setter function that adds or changes a key-value pair.
 */
export function assoc<K extends keyof any, V>(key: K, value: V) {
  return function assoc__<T extends Record<any, any>>(obj: T): T & Record<K, V> {
    return assign(obj, { [key]: value });
  }
}
