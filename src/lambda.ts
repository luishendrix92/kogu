export type Func<T, R> = (x: T) => R;
export type Producer<P> = () => P;
export type Callable = () => void;
export type Consumer<T> = (product: T) => void;
export type Mapper<A, B> = (element: A, index: number) => B;
export type Predicate<T> = (element: T, index: number) => boolean;
export type Reducer<A, B> = (acc: A, element: B, index: number) => A;

/**
 * IDENTITY
 * TODO: Write description.
 * @param value
 */
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
 * Executes a pipeline in which a value passed to the
 * produced function flows from left to right.
 * @param f First step.
 * @param g Second step.
 */
export function pipe<A, B, C>(f: Func<A, B>, g: Func<B, C>): Func<A, C> {
  return function pipe__(x: A): C {
    return g(f(x));
  };
}

/**
 * Returns an invokable void function that always returns
 * the object or value that you passed first.
 * @param obj The thing that will be memorized.
 */
export function constant<T>(obj: T): Producer<T> {
  return function constant__(): T {
    return obj;
  }
}

/**
 * A function that does nothing and always returns `undefined`, it may
 * seem useless, but it's good for callbacks.
 */
export function noop(): void {
  return undefined;
}

/**
 * REPEATEDLY
 * TODO: Write description.
 * @param effect Callback with potential side effects and optional return value.
 * @param times  Amount of times the callback will be run.
 */
export function repeatedly<T>(effect: Producer<T>, times: number): T[] {
  if (times < 0) {
    throw new Error('[repeatedly]: Argument "times" must not be negative');
  }

  const collectedResults: T[] = [];

  for (let i = 0; i < times; i++) {
    collectedResults.push(effect());
  }

  return collectedResults
}

/**
 * TODO: Write description.
 * @param assertion
 */
export function negate<A extends any[]>(assertion: (...args: A) => boolean) {
  return function negate__(...args: A): boolean {
    return !(assertion(...args));
  }
}
