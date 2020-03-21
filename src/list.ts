import {Mapper, Predicate, Reducer} from './lambda';

/**
 * Folds a list from left to right using an initial value to
 * accumulate an eventual result. It's similar to `reduce`
 * although the initial value is obligatory.
 * @param reducer Binary function that serves as a reducer.
 * @param initial Initial value for the accumulation.
 */
export function foldl<R, T>(reducer: Reducer<R, T>, initial: R) {
  return function foldl__(elements: T[]): R {
    const length = elements.length;
    let reduced: R = initial;

    for (let i = 0; i < length; i++) {
      reduced = reducer(reduced, elements[i], i);
    }

    return reduced;
  }
}

/**
 * Returns a function that transforms a list of elements of type A to another
 * list of elements of type B using a function that transforms A to B.
 * @param mapper Function that transforms individual elements.
 */
export function map<A, B>(mapper: Mapper<A, B>) {
  return function map__(elements: A[]): B[] {
    return foldl<B[], A>((mapped, element, index) => {
      mapped.push(mapper(element, index));

      return mapped;
    }, [])(elements);
  }
}

export function filter<T>(pred: Predicate<T>) {
  return function filter__(elements: T[]): T[] {
    return foldl<T[], T>((filtered, element, index) => {
      if (pred(element, index)) {
        filtered.push(element);
      }

      return filtered;
    }, [])(elements);
  }
}
