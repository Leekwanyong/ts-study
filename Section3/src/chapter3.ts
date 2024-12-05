//  기본 Type
//  업 캐스팅
// number Type이 슈퍼 여서 가능
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입에 대한 호환성
// 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

// 슈퍼 타입
// 조건이 더 적은 타입이 슈퍼타입이 된다.
let animal: Animal = {
  name: "dog",
  color: "yellow",
};

// 다운 타입
// dog 타입이 슈퍼 타입이 되어야만 할꺼 같지만
// dog 타입에는 breed라는 타입이 있기 떄문에
// 어떤 타입에는 있을수도 없을수도 있기 떄문에 다운타입이 되는 것이다.
let dog: Dog = {
  name: "pepy",
  color: "black",
  breed: "진도",
};

animal = dog;

// dog = animal;

// Book Type 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

// 다운 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "ReactJS",
};

book = programmingBook;
// programmingBook = book;

// Book 타입이 슈퍼타입 이지만
// 원래 프로그래밍북에 있는 프로퍼티 못들어감
// 그 이유는 초과 프로퍼티 검사 때문에
// 초과 프로퍼티 검사란? 정의해 놓지 않은 프로퍼티를 작성하면 안 되도록 막는 검사

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "ReactJS",
};

let book3: Book = programmingBook;

// 함수에서도 발생
function func(book: Book) {
  func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "ReactJS",
  });
}

func(programmingBook);
