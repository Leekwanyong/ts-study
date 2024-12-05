// 제네릭 (일반적인, 포괄적인)
// 제네릭 함수로 가변적으로 정할 수 있다.
// 제네럴 종합병원 이라고 외국에서는 부른다.
// <T> 타입 변수선언
function func<T>(value: T): T {
  return value;
}

// 인수에 여러가지 타입을 넘기고 싶다면?
// func(10);
// func(true);

let sum = func(10);

let bool = func(false);

let str = func("string");

let arr = func([1, 2, 3]);
