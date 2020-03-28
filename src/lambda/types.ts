export type Func<T, R> = (x: T) => R;

export type Producer<P> = () => P;

export type Runnable = () => void;

export type Consumer<T> = (product: T) => void;

export type Mapper<A, B> = (element: A, index: number) => B;

export type Predicate<T> = (element: T, index: number) => boolean;

export type Reducer<A, B> = (acc: A, element: B, index: number) => A;
