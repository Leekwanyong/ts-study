// 인덱스드 액세스 타입
// 내가 원하는 프로퍼티를 뺴올 수 있다.

// 객체
// 객체에 내가 원하는 프로퍼티를 뺴올 수 있다.
//  Post["author"]면 여기 안에 있는 객체를 가져올 수 있고
//   Post["author"]["id"]면 author 속성 내부의 id 타입을 나타냅니다.
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

type Post = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
};

// Author는 { id: number; name: string } 타입을 의미
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.id}-${author.name}`);
}

const post: PostList[number] = {
  title: "hhh",
  content: "asdas",
  author: {
    id: 1,
    name: "lee",
  },
};

function getAuthorId(author: Post["author"]["id"]) {
  console.log(`Author ID: ${author}`);
}

const post2: Post = {
  title: "Learning TypeScript",
  content: "Indexed Access Types",
  author: {
    id: 42,
    name: "Alice",
  },
};

getAuthorId(post2.author.id); // "Author ID: 42"

// 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];
