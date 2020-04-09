/**
 * @desc
 * Partitions an array into chunks of `n` elements each and
 * optionally skips or repeats items using the argument
 * `step`. The last chunk can have less than `n` elements.
 * A positive `step` means some elements will be skipped;
 * a negative `step` means some elements will be repeated;
 * and a 0 `step` (the default) will not do anything.
 *
 * **Note**: This function is extremely similar to Clojure's
 * `partition-all`, but it doesn't have the `pad` argument.
 * @example
 * partition(2)(range(1, 4));
 * //> [[1, 2], [3, 4]]
 * partition(2)(range(1, 5));
 * //> [[1, 2], [3, 4], [5]]
 * partition(2, 1)(range(1, 5));
 * //> [[1, 2], [4, 5]]
 * partition(2, -1)(range(1, 3));
 * //> [[1, 2], [2, 3], [3]]
 * partition(3)([1, 2]);
 * //> [[1, 2]]
 * @throws {RangeError}     - When n is less than 1 or step <= -N if step is negative.
 * @param {number} n        - Amount of elements per chunk.
 * @param {number} [step=0] - Amount of elements to skip or repeat.
 * @return {function(xs: any[]): any[][]}
 * The chunks of elements.
 */
export function partition(n: number, step: number = 0) {
  return function partition__<T extends any>(xs: T[]): T[][] {
    if (n < 1) {
      throw new RangeError("[partition]: N should not be 0 or negative");
    } else if (step + n <= 0) {
      throw new RangeError("[partition]: Negative step should not go below or equal to -N");
    }

    const len = xs.length;
    const chunkAmount = Math.ceil(len / (n + step));
    const chunks = Array(chunkAmount);

    for (let i = 0; i < chunkAmount; i++) {
      const pivot = i * (n + step);

      chunks[i] = xs.slice(pivot, pivot + n);
    }

    return chunks;
  }
}
