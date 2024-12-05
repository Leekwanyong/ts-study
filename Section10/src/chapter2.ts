// 조건부 타입 기반의 유틸리티 타입들

// 1. Exclude<T, U>
// 제외하다, 추방하다
// T에서 U를 제거하는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

// Extracct<T, u>
// T에서 U를 추출하는 타입

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

// ReturnType
// 함수의 반환값 타입을 추출하는 타입

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type returnA = ReturnType<typeof funcA>;

type returnB = ReturnType<typeof funcB>;
