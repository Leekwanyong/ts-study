// 프로미스
// Promise<number> 여기서 <> 결과 값을 타입을 명시를 안해주면
// 언노운 타입으로 추론된다.

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("~~~떄문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 프로미스를 반환하는 함수의 타입을 정의
//    return new Promise<Post>((resolve, reject) =>
// function fetchPost(): Promise<Post> 추천 가독성 좋음
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "fds",
        content: "fds",
      });
    }, 3000);
  });
}

const postRequst = fetchPost();

postRequst.then((post) => {
  post.id;
});
