/**
 * Returns an invokable void function that always returns
 * the object or value that you passed first.
 * @param obj The thing that will be memorized.
 */
export default function constant<T>(obj: T) {
  return function constant__(): T {
    return obj;
  }
}
