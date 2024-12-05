// number;
// : number은 type 주석이라고 한다.
let num1 = 123;
let num2 = 0.123;
let num3 = Infinity;
let num4 = -0.123;
// string
let str1 = "asdas";
let str2 = `hlehleo`;
let str3 = `dkasdk${num1}`;
// boolean
let boo1 = true;
let boo2 = false;
//  null
let null1 = null;
// undefined
let unde1 = undefined;
// 리터럴 타입 리터럴은 값이라는 뜻
// 값 그 자체가 타입이다.
// 10이라고 정의 했기 떄문에 10만 넣을 수 있음
let numA = 10;
let strA = "hello";
let boolA = true;
// 배열과 튜플
let numArr = [1, 2, 3];
let strArr = ["hello", "im"];
let boolArr = [true, false];
// 배열 선언 2
// <> 이 것을 제너럴 이라고 한다.
let boolArray = [true, false];
// 배열에 요소에 타입이 다양한 경우
let multArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
// 2차원, 3차원 배열 등
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// ts에서만 제공되는 타입
/// 길이와 타입이 고정되어 있는 타입
let tup1 = [1, 2];
let tup2 = [1, "2", true];
// push, pop 배열에 접근하는 것에는 작동을 안함 ts가
tup1.push(1);
const user = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["최아무개", 5],
];
export {};
// 객체
