// Js Class
// 이처럼 Object처럼 똑같이 생긴 것을 단 하나의 클래스로 편하게 만들어준다.

// 동일한 형식, 동일한 구조를 가지고 있는 것을 만들어야 한다면
// 굉장히 불편하게 구현해야 한다.
// let studentA = {
//   name: "ll",
//   grade: "A+",
//   age: 27,
//   study() {
//     console.log("study");
//   },
//   introduce() {
//     console.log("hihi");
//   },
// };

// let studentB = {
//   name: "ll2",
//   grade: "A",
//   age: 27,
//   study() {
//     console.log("study2");
//   },
//   introduce() {
//     console.log("hihi2");
//   },
// };

class Student {
  // 필드 설정
  // 모양을 찍어내는 붕어빵처럼 프로퍼티 설정
  name;
  grade;
  age;

  // 생성자 만들기
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  // 메서드 안에서 this를 이용하면 현재 객체의 값을 가져온다.
  // 객체에 속한 함수
  study() {
    console.log("study2");
  }
  introduce() {
    console.log(`hihihihi ${this.name}`);
  }
}

// 클래스를 이용해서 만든 객체를 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("Lee", "A+", 27);
console.log(studentB);
// 메서드 호출하기
console.log(studentB.study());

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(favoriteSkill) {
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}함`);
  }
}

const studentDeveloper = new StudentDeveloper("byby", "B+", 27, "react");

console.log(studentDeveloper);
