//  ts Class

const employee = {
  name: "hello",
  age: 27,
  position: "fe",
  workerData() {
    console.log("123");
  },
};

// ts가 type 추론 할 수 없는 정보가 없을 떄에
//  오류 발생 --에는 암시적으로 'any' 형식이 포함됩니다.
//  오류 발생 --속성은 이니셜라이저가 없고 생성자에 할당되어 있지 않음
//  ts에 클래스는 type으로도 쓸 수 있다.
class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("hihihihi");
  }
}

const employeeB = new Employee("hihi", 27, " fe");
console.log(employeeB.work());

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",

  work() {
    console.log("asdasdas");
  },
};

// super 호출은 포함해야함 상속
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
}
