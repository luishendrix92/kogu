export type Func<T, R> = (x: T) => R;

export function identity<T>(value: T): T {
  return value;
}

/**
 * Composes two functions (f ∘ g) and returns a new function that executes the
 * right side function and passes the result to the left side function.
 * @param f Left-hand function.
 * @param g Right-hand function.
 */
export function compose<A, B, C>(f: Func<B, C>, g: Func<A, B>): Func<A, C> {
  return function compose__(x: A): C {
    return f(g(x));
  };
}

/**
 * Executes a pipeline in which a value passed to the produced function flows from left to right.
 * @param f First step.
 * @param g Second step.
 */
export function pipe<A, B, C>(f: Func<A, B>, g: Func<B, C>): Func<A, C> {
  return function pipe__(x: A): C {
    return g(f(x));
  };
}
