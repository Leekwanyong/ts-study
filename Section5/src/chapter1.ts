// 인터페이스 확장
// 슈퍼타입에서 중복되는 프로퍼티를 제거
//  extends 확장한다. 기존 부모의 타입에 프로퍼티를 받는다
//  추가로 더 자식만의 고유한 것을 넣을 수 있다. (상속)
interface Animal {
  name: string;
  age: number;
}

//  type에 리터럴 타입으로 에만 가능
//  원본타입에서 서브타입으로
interface Dog extends Animal {
  //   name: "heleleoelo";
  isBarl: boolean;
}

const dog: Dog = {
  name: "",
  age: 0,
  isBarl: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chiken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {
  name: "";
  age: 0;
  isBark: false;
  isScratch: false;
}
