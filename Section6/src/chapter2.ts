// 접근 제어자
// 범위를 접근을 제어함
// => public private proteced
// public name: string; 아무 것도 안쓰면 임 공공의(다 접근 가능)
// private이면 접근 불가 읽기 불가, 메서드에서만 쓰고 싶으면 설정
// 생성자에게 접근제어자를 쓸꺼이면은 필드를 삭제해줘야한다.
// constructor에 this.~~ = ~~도 생략가능
class Employee {
  protected name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log(`${this.name}hihihihi`);
  }
}

// 객체여서 수정 가능
const employee = new Employee("hihi", 27, "fe");
// employee.name = "asd";

// 상속받은 자식 클래스여도 접근 불가능 private이면
//  protected name: string; 자식 클래스에 까지만 허용하는 방법
// protected 외부에서도 접근 불가
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    positon: string,
    officeNumber: number
  ) {
    super(name, age, positon);
    this.officeNumber = officeNumber;
  }

  func() {
    this.name;
  }
}
