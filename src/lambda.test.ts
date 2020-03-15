import {compose, identity} from './lambda';
import {inc, square} from './math';

describe('compose', () => {
  it('should compose two functions of the same return type', () => {
    expect(compose(square, inc)(5)).toBe(36);
  });

  it('should compose two functions of different return types', () => {
    expect(compose(String, Math.sqrt)(25)).toBe('5');
  });
});

describe('identity', () => {
  it('should return the same value/reference that was passed', () => {
    const refArray: number[] = [1, 2, 3];
    const obj: any = { name: 'Charles', age: 90 };

    expect(identity(5)).toBe(5);
    expect(identity(identity)).toBe(identity);
    expect(identity(refArray)).toBe(refArray);
    expect(identity('Hello')).toBe('Hello');
    expect(identity(obj)).toBe(obj);
  });
});
