// Type 추론
// 초기 값을 기준으로 타입을 추론 자동으로
// Type을 잘 이용하면 굳이 정의해주지 않아도 된다.
// 다만 모든 타입을 다 타입스크립트가 추론해 주지 않는다.

// 변수를 선언한 상황
// 변수의 초기 값으로 타입을 추론한다.
let a = 10;

let c = {
  id: 1,
  name: "lee",
  profile: {
    nickname: "winterlood",
  },
  urls: ["winterlood.com"],
};

// 함수는 반환 값으로 타입을 추론한다.
function func() {
  return "hello";
}

// 함수에 매개변수가 있으면 추론을 못한다.
function func1(message) {
  return message;
}

// 매개변수에 기본 값을 주어진다면 가능하다.
function func2(message = "hello") {
  return message;
}

// Type을 선언 해주고
// let d; 암묵적 타입으로 추론
// nubmer 타입으로 추론했음
// nubmer Type이기 떄문에 number Type 함수 사용가능
// String 형식에 함수 사용 불가능
// let 처럼 범용적으로 조금 더 넓히는 것을 Type 넓히기라고 한다.
let d;
d = 10;
d.toFixed();
// d.toUpperCase();

// d = "heello"; 진화함
// 암묵적으로 만들면 타입이 계속 진화한다.
d = "heello";

// 상수이기 때문에 타입을 정하지 않으면 리터럴 타입으로 추론함
const num = 10;
