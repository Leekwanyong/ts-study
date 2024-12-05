// 템플릿 리터럴 타입
// 문자열로 여라가지 상황이 올 떄에 사용이 가능하다.

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// 조합된 타입
type colorAnimal = `${Color}-${Animal}`;
