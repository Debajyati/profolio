/**
 * Applies a provided function to each element of two arrays in parallel,
 * creating a new array of the results.
 *
 * This function is similar to `Array.prototype.map()` but operates on two
 * input arrays simultaneously, applying the `transformer` callback to
 * corresponding elements from each array. The resulting array will have
 * a length equal to the shortest of the two input arrays.
 *
 * @template T The type of elements in the first input array.
 * @template U The type of elements in the second input array.
 * @template R The type of elements in the resulting array.
 * @param {T[]} arr1 The first array to iterate over.
 * @param {U[]} arr2 The second array to iterate over.
 * @param {(item1: T, item2: U, index: number) => R} transformer
 * A callback function that is called for each pair of corresponding
 * elements. It takes three arguments:
 * - `item1`: The current element from `arr1`.
 * - `item2`: The current element from `arr2`.
 * - `index`: The index of the current elements in both arrays.
 * It should return the new element to be added to the result array.
 * @returns {R[]} A new array containing the results of calling the
 * `transformer` function on each pair of elements.
 */
function transformParallel<T, U, R>(
  arr1: T[],
  arr2: U[],
  transformer: (item1: T, item2: U, index: number) => R
): R[] {
  const result: R[] = [];
  const minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < minLength; i++) {
    result.push(transformer(arr1[i], arr2[i], i));
  }

  return result;
}

export {
  transformParallel,
}
