// any
// 사기타입 기존의 JS처럼 쓸 수 있다.
// any 타입은 ts에 대한 이점을 다 포기하는 것과 같다.

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

// unknown
// 이것도 any타입처럼 아무거나 넣을 수 있다.
let unknown: unknown;

unknown = 1;
unknown = "asdasd";

if (typeof unknown === "number") {
  num = unknown;
}
