import { map } from './list';
import { square } from './math';

describe('map', () => {
  test('gives its callback the current element index', () => {
    expect(map((_: string, i: number) => i, ['first', 'second'])).toEqual([0, 1]);
  });

  test('will not transform an empty list into something else', () => {
    expect(map((_: any) => 0, [])).toEqual([]);
  });

  test('can transform a list of numbers', () => {
    expect(map(square, [1, 2, 3])).toEqual([1, 4, 9]);
    expect(map(square, [4.5, 5.8, -6])).toEqual([20.25, 33.64, 36]);
  });
});
