// 맵드 타입
// 객체 타입을 조작한다.
interface User {
  id: number;
  name: string;
  age: number;
}

// [key in "id" | "name" | "age"]?: User[key];맵드 타입 문법
// 이렇게 하면은 선택적 프로퍼티가 된다.
type PartiaUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "asd",
    age: 27,
  };
}

function updateuser(user: PartiaUser) {}

// 변경되는 값만 넘겨주고 싶다.
updateuser({
  //   id: 1,
  //   name: "asd",
  age: 20,
});
