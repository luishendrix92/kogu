/**
 * @desc
 * Returns a getter function that obtains the value that corresponds
 * to a given key (usually a string). When you run this function in
 * a Typescript environment, you won't be able to call it unless the
 * key strictly exists in the object that you supply to the getter.
 *
 * **Note**: If the key is not present in the object, you will
 * obtain `undefined` in return instead of an error.
 * @example
 * prop("age")({ age: 21 }); //> 21
 * prop("length")(range(0, 3)); //> 4
 *
 * // It can also fetch methods, but they aren't
 * // automagically bound to the original object.
 * const p1: Vector = new Vector(0, 0);
 * const p2: Vector = new Vector(3, 4);
 * const magnitude = prop("magnitude")(p1);
 *
 * magnitude.bind(p2)(); //> 2
 * @param {K extends PropertyKey}       key - The key matching the property.
 * @return {function(obj: Record<K, T>): T} - The value corresponding the property key.
 */
export function prop<K extends PropertyKey>(key: K) {
  return function prop__<O extends Record<K, any>>(obj: O): O[K] {
    return obj[key];
  }
}
