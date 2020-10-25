/**
 * @desc
 * Takes an array of arrays and applies a transposition operation
 * to it as if the array were a matrix. The result of this
 * operation is that the columns become the rows, meaning
 * there are `C` arrays of `R` elements where `C` is the amount
 * of elements in a row (from the original matrix) and `R`
 * is the amount of rows in the original matrix.
 * @example
 * transpose([[1, 2, 3], [4, 5, 6]]);
 * //> [[1, 4], [2, 5], [3, 6]]
 * transpose([[1, 2], [3, 4], [5, 6]);
 * //> [[1, 3, 5], [2, 4, 6]]
 * transpose([[1], [2], [3]);
 * //> [[1, 2, 3]]
 * @throws {TypeError} - When the first value in `matrix` is not an array.
 * @throws {TypeError} - When there is null or undefined in `matrix`
 * @param {any[][]} matrix - The array of arrays to transpose.
 * @return {any[][]}       - The transposed array of arrays.
 */
export function transpose<T extends any[]>(matrix: T[]): T[] {
  const rowCount = matrix.length;

  if (rowCount === 0) {
    return [];
  } else if (
    /* istanbul ignore next */
    !Object.prototype.hasOwnProperty.call(matrix[0], "length")
  ) {
    throw new TypeError("[transpose]: The first value in 'matrix' isn't an array.");
  }

  const colCount = matrix[0].length;
  const newMatrix = Array(colCount);

  for (let j = 0; j < colCount; j += 1) {
    const newRow = Array(rowCount);

    for (let i = 0; i < rowCount; i += 1) {
      newRow[i] = matrix[i][j];
    }

    newMatrix[j] = newRow;
  }

  return newMatrix;
}
