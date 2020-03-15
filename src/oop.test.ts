import {pipe} from './lambda';
import {mr, prop} from './oop';

class Point {
  private _x: number = 5;
  private _y: number = 5;

  public add(x: number, y: number): this {
    this._x += x;
    this._y += y;

    return this;
  }

  public toString(): string {
    return `(${this._x}, ${this._y})`;
  }
}

const p1: Point = new Point();
const car = {
  brand: 'Ford', year: 2015,
  describe(): string {
    return 'I have a ' + this.brand + ' from ' + this.year + '!';
  }
};

describe('mr', () => {
  it('should borrow a method from a native prototype', () => {
    expect(mr('toExponential')(5)).toBe('5e+0');
  });

  it('should borrow a method from a native prototype and applies props', () => {
    expect(mr('charAt', 4)('hello')).toBe('o');
  });

  it('should borrow a method from a custom JSON object', () => {
    expect(mr('describe')(car)).toBe('I have a Ford from 2015!');
    expect(mr('add', -3, 5)(p1).toString()).toBe('(2, 10)');
  });
});

describe('prop', () => {
  it('should obtain prop value from JSON object', () => {
    const author = { name: 'Luis', age: 25 };
    const getAge = prop('age');

    expect(getAge(author)).toBe(25);
  });

  it('should obtain prop value from known data type', () => {
    expect(prop('length')('lovecraft')).toBe(9);
  });

  it('should compose fine with "mr"', () => {
    const text: string = 'Hello\nBeautiful and\nCourageous\nWorld!';
    const lineCount: (text: string) => number = pipe(
      mr('split', '\n'),
      prop('length')
    );

    expect(lineCount(text)).toBe(4);
  });
});
