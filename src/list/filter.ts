import {Predicate} from "../lambda";
import {foldl} from "./index";

/**
 * Keeps the elements of an array that meet a given
 * criteria by using a predicate function.
 * @param pred Predicate function.
 */
export default function filter<T>(pred: Predicate<T>) {
  return function filter__(elements: T[]): T[] {
    return foldl<T[], T>((filtered, element, index) => {
      if (pred(element, index)) {
        filtered.push(element);
      }

      return filtered;
    }, [])(elements);
  }
}
