// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
// 값이 아무것도 없다, undefined 허용
// return문에서 사용하기 싫을 떄 void를 쓴다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입
// 반환값이 없다. 그 어떤 값도 저장할 수 없다

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

a = 1;
a = undefined;
a = null;
