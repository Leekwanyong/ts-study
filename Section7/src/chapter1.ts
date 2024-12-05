// 1. 매개 변수가 두 개이고, 인자 값이 다르다면
// 제네릭을 두 번 사용하면 된다.

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 2
// T[] 인덱스로 접근 가능하게 해야 오류안남
// 객체 타입도 쓸수있음
// [T, ...unknown[]] 튜플인데 첫 번쨰 요소는 T고,
// 나머지 요소는 배열로 들어올 꺼 같은데 타입들은 뭔지 잘 몰르겠다.

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let sum = returnFirstValue([1, 2, 3]);

let str = returnFirstValue([1, "hello", "mynameis"]);

// 3
// <T extends { length: number }>(data: T)
// T는 확장할꺼인데 대신 length가 있고 number인 형식으로 확장할 꺼다.

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10 });

// length길이가 없다면 제한
// let var4 = getLength(10);
