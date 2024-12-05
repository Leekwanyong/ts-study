// keyof 연산자
// 객체 타입에 쓴다
// key: "name" | "age" 비효율적 프로퍼티가 많아지면은 너무 별로다
// key: keyof을 쓰면은 프로퍼티가 많거나 할떄에도 아주 쉽게
// 유니온 타입으로 객체를 추출 할 수 있다.
// 무조건 타입에만 사용할 수 있다.

type Person = typeof person;

// interface Person {
//   name: string;
//   age: number;
// }

function getPersonKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "hhhh",
  age: 27,
};

getPersonKey(person, "name");
