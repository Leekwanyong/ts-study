// inter
// 특정 type만 떄올 수 있다.
// 추론을 할 수 없다면 거짓이 된다.
type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

// 예제1

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;
