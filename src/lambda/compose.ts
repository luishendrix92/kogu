import {Func} from "./types";

/**
 * Left to right function composition (the inverse of `pipe`).
 * Returns a function that accepts a single value which
 * is then fed to the composed function.
 * @param f1
 * @param f2
 * @param f3
 * @param f4
 * @param f5
 */
export function comp<A, B, C, D, E, F>(f1: Func<E, F>, f2: Func<D, E>, f3: Func<C, D>, f4: Func<B, C>, f5: Func<A, B>): Func<A, F>;
export function comp<A, B, C, D, E>(f1: Func<D, E>, f2: Func<C, D>, f3: Func<B, C>, f4: Func<A, B>): Func<A, E>;
export function comp<A, B, C, D>(f1: Func<C, D>, f2: Func<B, C>, f3: Func<A, B>): Func<A, D>;
export function comp<A, B, C>(f1: Func<B, C>, f2: Func<A, B>): Func<A, C>;
export function comp<A, B>(f1: Func<A, B>): Func<A, B>;
export function comp<A>(...funcs: any[]) {
  return function comp__(x: A) {
    return funcs.reduceRight((acc, f) => f(acc), x);
  }
}

/**
 * Sequence right to left composition (the inverse if `comp`).
 * Returns a function that accepts a single value which
 * is then fed to the resulting pipeline.
 * @param f1
 * @param f2
 * @param f3
 * @param f4
 * @param f5
 */
export function pipe<A, B, C, D, E, F>(f1: Func<A, B>, f2: Func<B, C>, f3: Func<C, D>, f4: Func<D, E>, f5: Func<E, F>): Func<A, F>;
export function pipe<A, B, C, D, E>(f1: Func<A, B>, f2: Func<B, C>, f3: Func<C, D>, f4: Func<D, E>): Func<A, E>;
export function pipe<A, B, C, D>(f1: Func<A, B>, f2: Func<B, C>, f3: Func<C, D>): Func<A, D>;
export function pipe<A, B, C>(f1: Func<A, B>, f2: Func<B, C>): Func<A, C>;
export function pipe<A, B>(f1: Func<A, B>): Func<A, B>;
export function pipe<A>(...funcs: any[]) {
  return function pipe__(x: A) {
    return funcs.reduce((acc, f) => f(acc), x);
  }
}
