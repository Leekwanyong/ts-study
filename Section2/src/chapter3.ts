// 타입 별칭
// 공통적으로 반영이 된다.
// 공통적으로 적용되어야 하는 것들에 대해서는 type별칭이 좋다.
type User = {
  id: number;
  nickname: string;
  bio: string;
};
// 중복된 코드 별로 안좋음
let user: { id: number; nickname: string; bio: string } = {
  id: 1,
  nickname: "winter",
  bio: "hello",
};

let user2: { id: number; nickname: string; bio: string } = {
  id: 2,
  nickname: "winter2",
  bio: "hello2",
};

let user3: User = {
  id: 1,
  nickname: "winter",
  bio: "hello",
};

//  [key: string]: string; 인덱스 시그니처
// 규칙을 이용해서 유연하게 정의가 가능하다.
// 키와 값이 규칙을 가지고 반복되는 타입이라면 유용하다.
type Contry = {
  [key: string]: string;
};

// 인덱스 시그니처
let contry: Contry = {
  Korea: "ko",
  Usa: "usa",
};

// korea: number; 꼭 하나가 있어야 한다면
// 타입을 일치 시켜줘야 한다.
type ContryNumber = {
  [Key: string]: number;
  // korea: string;
  korea: number;
};

let contryNumber: ContryNumber = {
  korea: 410,
  usa: 840,
};
