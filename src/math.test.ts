import {dec, inc, neg, range} from './math';

describe('inc', () => {
  it('should add 1 to a positive number', () => {
    expect(inc(5)).toBe(6);
    expect(inc(0)).toBe(1);
  });

  it('should increment a negative number', () => {
    expect(inc(-6)).toBe(-5);
  });
});

describe('dec', () => {
  it('should subtract 1 to a positive number', () => {
    expect(dec(90)).toBe(89);
    expect(dec(0)).toBe(-1);
  });

  it('should decrement a negative number', () => {
    expect(dec(-5)).toBe(-6);
  });
});

describe('neg', () => {
  it('should transform a positive number into a negative', () => {
    expect(neg(26)).toBe(-26);
  });

  it('should transform a negative number into a positive', () => {
    expect(neg(-85)).toBe(85);
  });

  it('should not affect zero', () => {
    expect(neg(0)).toBe(0);
  });
});

describe('range', () => {
  it('should create a range from 0 to N', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('should create a range from -N to 0', () => {
    expect(range(-5, 0)).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  it('should create a range from N1 to N2', () => {
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it('should create a range from -N to N', () => {
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
  });

  it('should create a reverse range when A > B', () => {
    expect(range(5, 0)).toEqual([5, 4, 3, 2, 1, 0]);
    expect(range(10, 5)).toEqual([10, 9, 8, 7, 6, 5]);
    expect(range(2, -2)).toEqual([2, 1, 0, -1, -2]);
    expect(range(0, -5)).toEqual([0, -1, -2, -3, -4, -5]);
  });

  it('should create a singleton array when both limits are equal', () => {
    expect(range(5, 5)).toEqual([5]);
    expect(range(0, 0)).toEqual([0]);
    expect(range(0, -0)).toEqual([0]);
    expect(range(-5, -5)).toEqual([-5]);
  });
});
