// 인터페이스
//  객체 타입에 특화
//  readonly 읽기 전용 속성
//   sayHi(): void; 호출 시그니쳐
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person | number = {
  name: "lll",
  sayHi: function () {
    console.log("123");
  },
};

// person.name = '123'
