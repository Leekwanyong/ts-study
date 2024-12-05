// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함
// string, number타입들은 서로 교집합이 없다.

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

//  Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다.
//  Member => {name}님 현재까지 {point}모았습니다.
//  Guest => {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      break;
    }
    case "MEMBER": {
      break;
    }
    case "GUEST": {
      break;
    }
  }
  if (user.tag === "ADMIN") {
    user;
  } else if (user.tag === "MEMBER") {
    user;
  } else {
    user;
  }
}

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 => 콘솔에 로딩중 출력
//  실패 => 실패 : 에러메세지 출력
// 성공 => 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("loading");
      break;
    }
    case "FAILED": {
      console.log(task.error.message, "error");
      break;
    }
    case "SUCCESS": {
      console.log(task.response.data, "good");
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "error",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "Good",
  },
};
