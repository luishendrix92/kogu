import * as R from "ramda";

export function arity<R>(cap: number, f: (...args: any[]) => R) {
  return function arity__(this: any, ...args: any[]): R {
    if (cap < 0) {
      throw new RangeError("[arity]: Arity cap cannot be less than 0.");
    }

    const cappedArgs = args.slice(0, cap);

    return f.apply(this, args);
  }
}R.nAry()
