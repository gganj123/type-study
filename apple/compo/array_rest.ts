let 멍멍: [string, boolean?] = ["dog", true];
//array자료에 붙일 수 있는 tuple type
//boolean 뒤에 ? 를 치고 싶으면 array에 항상 맨뒤에만 가능하다.
//세개 만들고 두번쨰에 하면 오류!

function 함슈(...x: [number, string]) {
  console.log(x);
}

function 함슈2(a: number, b: string) {
  console.log([a, b]);
}
//둘다 똑같다

함슈(1, "2");

//rest parameter

let arr = [1, 2, 3, 765, 4];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

//튜플과 스프레드 같이 쓰기

type 음식 = [string, number, ...boolean[]];

let arrr: 음식 = ["짜장면", 3500, true, true, true, false, true];

type study3type = [string, boolean, ...(number[] | string[])];

function study3func(x: study3type) {
  console.log(x);
}

function study4func(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];
  rest.forEach((e) => {
    if (typeof e === "string") {
      result[0].push(e);
    } else {
      result[1].push(e);
    }
  });
  return result;
}

study4func("b", 5, 6, 8, "a", 6);
