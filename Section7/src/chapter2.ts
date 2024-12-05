// map 메서드

const arr = [1, 2, 3];
arr.map((it) => it * 2);

//  [2, 4, 6]
// map<T, U>(arr: T[], callback: (item: T) => T) 이면
// map(["1", "2"], (it) => parseInt(it)); 오류 난다. 배열의 첫 번쨰 값이
// string이 기 떄문에
// map<T, U>(arr: T[], callback: (item: T) => U)
// 오류가 안난다.

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (const a of arr) {
    result.push(callback(a));
  }
  return result;
}

let arr2 = [1, 2, 3, 4];

map(arr, (it) => it * 2);
map(["a", "b", "c"], (it) => it.toLocaleUpperCase());
map(["1", "2"], (it) => parseInt(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});
