import {foldl} from "../";

/**
 * @desc
 * Counts the elements inside an array and returns a dictionary
 * where the keys are the unique elements, and the values are
 * the number of times they appear in the provided array.
 *
 * **Note**: Any type of value or reference is allowed inside
 * the array, and they get converted to string using the
 * `String` constructor to assign them as keys.
 * @example
 * frequencies(["A", 10, true, true, null, "A", "A"]);
 * //> { A: 3, 10: 1, true: 2, null: 1 }
 * frequencies(["Singleton"]);
 * //> { "Singleton": 1 }
 * frequencies([]); //> {}
 * @param {any[]} elements - List of elements of any type.
 * @return {Record<string, number>}
 * A dictionary containing the elements as
 * the keys, and their count as the values.
 */
export function frequencies(elements: any[]): Record<string, number> {
  return foldl((freqMap, element: any) => {
    const key = String(element);

    freqMap[key] = freqMap[key] !== undefined
      ? freqMap[key] + 1
      : 1;

    return freqMap;
  }, {} as Record<string, number>)(elements);
}
