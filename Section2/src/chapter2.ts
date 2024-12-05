// object로 명시하면은
// user.id로 접근 불가 점표기법으로 접근불가.
// 객체 리털러 타입으로 명시해야한다.
// id? id가 있을 수도 있고, 없을 수도 있다.
let user: { id?: number; name: string } = {
  id: 1,
  name: "이정환",
};

user.id;
user.name;

user = {
  name: "홍길동",
};
// readonly을 사용하면 값이 절대 수정을 못한다.
let config: { readonly apiKey: string } = {
  apiKey: "my api key",
};
