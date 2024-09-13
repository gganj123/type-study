//Generic함수 만들기
function fuccc<Mytype>(x: Mytype[]): Mytype {
  return x[0];
}

function fucc<Mytype>(x: unknown[]) {
  return x[0];
}

let a = fucc<number>([4, 2]);
let b = fucc<string>(["4", "2"]);

console.log(a);
console.log(b);

interface LengthCheck {
  length: number;
}

//타입파라미터 제한두기
//extend를 타입지정할때는 복사개념이지만 함수에서 이런식으로 쓸떄는
//체크개념이라고 보면 된다.
function fung<Mytype extends LengthCheck>(x: Mytype) {
  //extends로 인해 Mytype이 우측에 있는 속성을 가지고있는지 체크
  //넘버타입을 가지고 있다 체크하기위해 쓰는 네로윙같은 인정이됨
  return x.length;
}

fung<string[]>(["100"]);

