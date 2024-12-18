// 조건부 타입
// 삼항연산자

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// 제네릭과 함꼐 써야 강해진다.
type B = ObjB extends ObjA ? number : string;

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);
