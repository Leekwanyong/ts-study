//  제네릭 인터페이스
// 제네릭 인터페이스를 사용할 떄는
// 반드 시 타입으로 정의할 떄 사용할 떄 <>가 필요하다.
// let keyPair: KeyPair<string, number>

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: false,
  value: ["a", "b"],
};

// 인덱스 시그니쳐 문법과 사용하면은 유연하게 사용이 가능하다.

interface NumberMap {
  [Key: string]: number;
}

let numberMap1: NumberMap = {
  key: 1233,
};

interface Map<V> {
  [Key: string]: V;
}

let stringMap: Map<String> = {
  key: "value",
};

// 제네릭 타입 별칭

type Map2<V> = {
  [Key: string]: V;
};

let stringMap2: Map2<string> = {
  hello: "hello",
};

//  제네릭 인터페이스의 활용 예시

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  if (user.profile.type !== "student") {
    console.log("잘못왔으유");
    return;
  }
  user.profile;

  const school = user.profile.school;
  console.log(`${school}로 등교`);
}

const developerUser: User<Developer> = {
  name: "hoho",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "ggg",
  profile: {
    type: "student",
    school: "kukuD",
  },
};
