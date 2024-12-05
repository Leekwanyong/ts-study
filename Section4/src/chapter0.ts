// 함수 타입 정의방법

// 함수를 설명하는 가장 좋은 방법
// 어떤 매겨변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법

const add = (a: number, b: number) => a + b;

// 함수의 매개변수
//  tall? 옵셔널체이닝을 쓸 때는 if문으로 typeof을 체크
function introduce(name = "이정환", tall?: number) {
  console.log(`${name}`);
  if (typeof tall === "number") {
    console.log(tall);
  }
}

function getSum(...rest: number[]) {
  rest.reduce((a, b) => a + b, 0);
}
