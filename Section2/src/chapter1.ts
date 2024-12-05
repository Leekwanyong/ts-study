// number;
// : number은 type 주석이라고 한다.
let num1: number = 123;
let num2: number = 0.123;
let num3: number = Infinity;
let num4: number = -0.123;

// string
let str1: string = "asdas";
let str2: string = `hlehleo`;
let str3: string = `dkasdk${num1}`;

// boolean
let boo1: boolean = true;
let boo2: boolean = false;

//  null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입 리터럴은 값이라는 뜻
// 값 그 자체가 타입이다.
// 10이라고 정의 했기 떄문에 10만 넣을 수 있음
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;

// 배열과 튜플
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im"];

let boolArr: boolean[] = [true, false];
// 배열 선언 2
// <> 이 것을 제너럴 이라고 한다.
let boolArray: Array<boolean> = [true, false];

// 배열에 요소에 타입이 다양한 경우
let multArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
// 2차원, 3차원 배열 등
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// ts에서만 제공되는 타입
/// 길이와 타입이 고정되어 있는 타입
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// push, pop 배열에 접근하는 것에는 작동을 안함 ts가
tup1.push(1);

const user: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["최아무개", 5],
];

// 객체
