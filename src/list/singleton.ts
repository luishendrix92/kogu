/**
 * @desc
 * Creates an array containing only the element
 * you pass to this function, thus making it
 * a "singleton" (single-element collection).
 * @example
 * singleton("Han Solo"); //> ["Han Solo"]
 * singleton(undefined); //> [undefined]
 * singleton([0]); //> [[0]]
 * @since 1.0.0
 * @param {any} element - The element to enclose.
 * @return {any[]}      - The singleton array.
 */
export function singleton<T>(element: T): [T] {
  return [element];
}
