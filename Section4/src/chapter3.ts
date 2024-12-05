// 함수 타입의 호환성
// 특정 함수 타입의 다른 함수 타입으로 취급해도 괜찮을가를 판단하는
// 1. 반환값의 타입이 호환되는가?
// 2. 매개변수의 타입이 호환되는가?

// 기준1, 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; 오류
// a는 number type, b는 number 리터럴 type
// 다운 캐스팅이여서 불가하다.

// 기준2, 매개변수가 호환되는가
// 2-1 매개변수의 개수가 값을 떄
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
// 업 캐스팅 불가
// 매개변수 일 떄는 다운캐스팅이 가능하다.
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  name: "lee";
};
let dogFunc = (dog: Dog) => {
  name: "hoho";
  color: "red";
};

// animalFunc = dogFunc

let testFunc = (animal: Animal) => {
  animal.name;
  // animal.color
};

let testFunc2 = (dog: Dog) => {
  dog.name;
  dog.color;
};

// 2-2 매개변수의 개수가 다를 떄

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
// f1은 매개변수 2개 f2은 매개변수 1개 여서 불가
// 매개변수가 더 적을 떄만 호환이 가능하다.
// 매개변수의 타입이 같아야 한다.
