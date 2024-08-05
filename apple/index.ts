type Name = string | number;

let 이름: Name = "kim";

function 함수(x: number): number {
  return x * 2;
}

함수(123);

type Member = [number, boolean];
let john: Member = [13, true]; //array에 쓸 수 있는 tuple타입

type Members = {
  [key: string]: string;
  // key로 타입지정을 하게 되면 모든 object속성이 그 타입
};

let johns: Members = { name: "kim" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
