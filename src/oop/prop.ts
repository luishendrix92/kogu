/**
 * TODO: Describe
 * @param key
 */
export default function prop<K extends PropertyKey>(key: K) {
  return function prop__<O extends Record<K, any>>(obj: O): O[K] {
    return obj[key];
  }
}
