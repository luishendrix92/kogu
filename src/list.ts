/**
 * Transforms a list of elements of type A to another list of elements of type B using a function that transforms A to B.
 * @param mapper   Function that transforms individual elements
 * @param elements A list of various types of elements
 */
export function map<A, B>(mapper: (element: A, index: number) => B, elements: A[]): B[] {
  const mapped: B[] = [];
  const length = elements.length;

  for (let i = 0; i < length; i++) {
    mapped.push(mapper(elements[i], i));
  }

  return mapped;
}
