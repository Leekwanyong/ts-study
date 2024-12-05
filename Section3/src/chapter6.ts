// - 조건문 등을 이용해 넓은타입(유니온타입)에서 좁은타입으로
// - 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed;
// value => string : toUpperCase
// value => Data: getTime
// value => Person: name은 age살 입니다.
// 타입 가드
//  else if (typeof value === "object") 별로임
// value instanceof Date: value가 Date 객체인지 확인.
// value가 null인 경우도 타입 가드에서 처리해야 합니다.
// value가 null이 아니도록 if (value)로 먼저 확인합니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toString());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(value.name, value.age);
  }
}
