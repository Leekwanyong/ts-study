// 유틸리티 타입
// ts가 제공하는 특수한 타입
// 실무에서 자주 사용하는 타입들을 미리 만들어 놓은 것

import { title } from "process";

// 1. 맵드 타입 기반의 유탈리티 타입
// Partial<T>
// -> 부분적인, 일부분의
// -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "title",
  content: "...",
};

// Required<T>
// -> 필수의, 필수적인
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

//  Readonly<T>
//  -> 읽기전용 수정불가
//  -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

type Readonly<T> = {
  [key in keyof T]: T[key];
};
const readonlyPost: Readonly<Post> = {
  title: "...",
  tags: [],
  content: "",
};
