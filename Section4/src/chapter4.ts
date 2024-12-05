// 함수 오버로딩
// 라이브러리 코드를 분석하는데 도움이 된다.
// 하나의 함수를 매개변수의 개수나 타입에 따라
// 여러가지 버전으로 만드는 문법

// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
// ?을 사용하여 선택적으로 방어를 해야 오류가 안 뜬다.
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 오버로드 시그니쳐에 하나를 따른다.
// func();
func(1);
// func(1,2)
func(1, 2, 3);
