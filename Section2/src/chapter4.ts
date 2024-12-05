// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해 두고 사용하는 타입
// 까먹을 수도 있는 값에는 enum으로 지정하여 사용
// 숫자를 할당하지 않아도 자동으로 위에서 부터 아래로 숫자가 차례대로 지정된다.
// 숫자형, 문자열이넘도 가능하다.
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

// 0번 관리자
const user1 = {
  name: "lee",
  roul: Role.ADMIN,
};
// 1번 유저
const user2 = {
  name: "kee",
  roul: Role.USER,
};
// 2번 게스트
const user3 = {
  name: "qee",
  roul: Role.USER,
};
