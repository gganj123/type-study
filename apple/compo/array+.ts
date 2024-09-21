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
