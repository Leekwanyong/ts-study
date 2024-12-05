//  Type 단언

type Person = {
  name: string;
  age: number;
};

// 이렇게 TS가 추론을 해주기 떄문에 내가 원하는 방식대로
// 나중에 프로퍼티를 추가 하고 싶은 상황인데 타입 추론 떄문에 안된다
let person1: Person = {};
person1.age = 23;

// 이럴 때는 as를 사용하여 Type 단언을 사용하면 된다.
let person = {} as Person;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "lele",
  color: "yellow",
  breed: "진도",
} as Dog;

// Type 단언의 규칙
// 값 as 단언 <- 단언식
// A(값) as B(단언)
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 한다.

let num1 = 10 as never;
let num2 = 10 as unknown;
