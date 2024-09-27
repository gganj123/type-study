export var 이름 = "kim";
export var 나이 = 20;

//이것도 당연가능
export interface 인터페이스 {}

export type Name = string | number;

namespace 네임스페이스 {
  export type Name = string | number;
}
//하나의 오브젝트 자료

//하나의 오브젝트 자료로 만들었기 떄문에
let 변수: 네임스페이스.Name = "kim";

export type Caz = {
  wheel: number;
  model: string;
};

export interface Bike {
  wheel: 2;
  model: string;
}

export type voidFun = (a?: object) => void;
