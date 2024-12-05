//  인터페이스 선언 합침

//  type은 오류
// type Person = {
//     name: string
// }

// type Person = {
//     age: number
// }

// 중복 가능
// 중복하면은 합쳐진다. 하나의 Psrson으로
interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const pserson: Person = {
  name: "",
  age: 0,
};

// 모듈 보장
// c를 보강해줬음
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
