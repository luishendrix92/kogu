export function mr<M extends PropertyKey>(methodName: M, ...args: any[]) {
  return function mr__<O extends Record<M, CallableFunction>>(obj: O): O[M] {
    return obj[methodName](...args);
  }
}

export function prop<K extends PropertyKey>(key: K) {
  return function prop__<O extends Record<K, any>>(obj: O): O[K] {
    return obj[key];
  }
}
