// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

// 유니온 타입으로 하면은 한 번은 number, string type이 들어온다.
let b: StringNumberSwitch<string | number>;

// 1 단계
// 안에 타입이 분리된다. 유니온으로
let c: StringNumberSwitch<boolean | number | string>;

// 실용적인 예제
// 특정 타입만 제거 할 수 있다.

type Exclude<T, U> = T extends U ? never : T;

// 1 단계
// 유니온 타입으로 나누어 진다.
// Exclude<number, string>
// Exclude<strung, strung>

// 2 단게
// number
// never
type A = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;

type B = Exclude<number | string | boolean, string>;
