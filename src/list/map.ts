import {Mapper} from "../lambda";
import {foldl} from "./index";

/**
 * Returns a function that transforms a list of elements of type A to another
 * list of elements of type B using a function that transforms A to B.
 * @param mapper Function that transforms individual elements.
 */
export default function map<A, B>(mapper: Mapper<A, B>) {
  return function map__(elements: A[]): B[] {
    return foldl<B[], A>((mapped, element, index) => {
      mapped.push(mapper(element, index));

      return mapped;
    }, [])(elements);
  }
}
