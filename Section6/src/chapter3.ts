// 인터페이스와 클래스
// implements 구현하다라는 뜻
// ~~클래스는 ~~인터페이스를 구현한다.
// 인터페이스로 구현하는 클래스는 무조건 public다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 이동!`);
  }
}
