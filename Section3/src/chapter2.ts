// Unknown 타입은 전체 집합

function unknownExam() {
  // 업 캐스팅 가능
  let a: unknown = 1;
  let b: unknown = "asd";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // 다운 캐스팅 불가
  // let num: number = unknownVar;
}

// Never 타입, 불가능
// 공집합은 아무것도 없는 집합이다.
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  // 어떤 값도 저장되어서는 안 되는 변수의 타입으로 활용하면 좋다.
  // 위에서 아래로 불가
  // let never1: never = 10;
}

// Void

function voidExam() {
  function voidFFunc(): void {
    console.log("hello");
    return undefined;
  }

  let voidVar: void = undefined;
}

// any type
// 치트키
// 타입계층도를 무시한다.
// 사용하지 않는 것이 좋다.
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let neverVar: never;

  anyVar = unknownVar;
  // any Type이 치트키 지만 never 타입은 그 어떠한 값도 올 수 없기 떄문에 불가
  // anyVar = neverVar;
}
