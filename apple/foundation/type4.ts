// function 함수(x?: number): void {
//   x * 2;
// }
// //number? 이거나 number|undefined 랑 똑같음
// //void는 return 이 없는 빈것을 의미함

// function 홍길동(x?: string): void {
//   if (typeof undefined) {
//     console.log("이름이 없습니다.");
//   }
//   console.log(`안녕하세요 ${x}`);
// }

// function Wordlength(x: string | number): number {
//   return x.toString().length;
// }

// function CanMarry(
//   money: number,
//   집보유여부: boolean,
//   매력점수: string
// ): string | void {
//   let score: number = 0;
//   if (집보유여부) {
//     score += 500;
//   }
//   if (매력점수 == "상") {
//     score += 100;
//   }
//   score += money;
//   if (score >= 600) {
//     return "결혼가능";
//   }
// }
// console.log(CanMarry(100, true, "상"));
