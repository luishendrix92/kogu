import {Func} from "./types";

export function comp<A, B, C, D, E, F>(f1: Func<E, F>, f2: Func<D, E>, f3: Func<C, D>, f4: Func<B, C>, f5: Func<A, B>): Func<A, F>;
export function comp<A, B, C, D, E>(f1: Func<D, E>, f2: Func<C, D>, f3: Func<B, C>, f4: Func<A, B>): Func<A, E>;
export function comp<A, B, C, D>(f1: Func<C, D>, f2: Func<B, C>, f3: Func<A, B>): Func<A, D>;
export function comp<A, B, C>(f1: Func<B, C>, f2: Func<A, B>): Func<A, C>;
export function comp<A, B>(f1: Func<A, B>): Func<A, B>;
/**
 * @desc
 * Right to left function composition (limited to 5 functions).
 * Returns a function that accepts a single value (the parameter of
 * the last function) and returns the return value of the first one.
 *
 * The formal type signature is `(y->z, ..., b->c, a->b)->(a->z)`.
 * @example
 * const introduce = comp((y: string) => "I am " + y, prop("name"));
 *
 * introduce({ name: "Ironman", age: 38 }) //> "I am Ironman"
 * comp(unchars, reverse, chars)("Arkham") //> "mahkrA"
 * comp(identity)([1, 2, 3]) //> [1, 2, 3]
 * comp(inc, square)(5) //> 26
 * @todo Implement with custom foldr
 * @see {@link pipe}
 * @param {...function} funcs - Unary functions as individual arguments.
 * @return {function}         - The composed unary function.
 */
export function comp<A>(...funcs: any[]) {
  return function comp__(x: A) {
    return funcs.reduceRight((acc, f) => f(acc), x);
  }
}

export function pipe<A, B, C, D, E, F>(f1: Func<A, B>, f2: Func<B, C>, f3: Func<C, D>, f4: Func<D, E>, f5: Func<E, F>): Func<A, F>;
export function pipe<A, B, C, D, E>(f1: Func<A, B>, f2: Func<B, C>, f3: Func<C, D>, f4: Func<D, E>): Func<A, E>;
export function pipe<A, B, C, D>(f1: Func<A, B>, f2: Func<B, C>, f3: Func<C, D>): Func<A, D>;
export function pipe<A, B, C>(f1: Func<A, B>, f2: Func<B, C>): Func<A, C>;
export function pipe<A, B>(f1: Func<A, B>): Func<A, B>;
/**
 * @desc
 * Left to right function composition (limited to 5 functions).
 * Returns a function that accepts a single value (the parameter of
 * the first function) and returns the return value of the last one.
 * Serves the same purpose as `comp` but in reverse order.
 *
 * The formal type signature is `(a->b, b->c, ..., y->z)->(a->z)`.
 * @example
 * const players = [{ pts: 240 }, { pts: 999 }, { pts: 501 }];
 *
 * pipe(
 *  map(prop("pts")),
 *  filter(gt(500)),
 *  sum
 * )(players); //> 1500
 * @todo Implement with custom foldl
 * @see {@link comp}
 * @param {...function} pipeline - Unary functions as individual arguments.
 * @return {function}            - The composed unary pipeline function.
 */
export function pipe<A>(...pipeline: any[]) {
  return function pipe__(x: A) {
    return pipeline.reduce((acc, f) => f(acc), x);
  }
}
