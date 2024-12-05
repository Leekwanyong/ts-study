// 2 Pick, Omit, Record

// Pick 타입
// -> 뽑다, 고르다
// -> 객체 타입으로부터 특정 프로퍼티만 골라낸다.

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "...",
  content: "...",
};

// Omit<T, K>
// -> 생략하다, 뺴다
// -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Record<K, V>
// 동일한 패턴을 가지고 있는 타입을 쉽게 정의 할 수 있다.
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// 첫 번째 키, 두 번쨰 값을 받음
type Thumbnail = Record<
  "large" | "medium" | "smaill" | "watch",
  { url: string; size: number }
>;
