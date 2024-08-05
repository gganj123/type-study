// //함수와 method에 type alias 지정하는 법
// //함수 타입의 alias를 지정해줄때는 애로우 펑션을 해주자
// type 함수타입 = (a: string) => number;
// let 함수: 함수타입 = function (a) {
//   return 1;
// };
// type Member = {
//   name: string;
//   age: number;
//   plusOne: (x: number) => number;
//   changeName: () => void;
// };
// let 회원정보: Member = {
//   name: "키드",
//   age: 34,
//   plusOne(x) {
//     return x + 1;
//   },
//   changeName() {},
// };
// 회원정보.plusOne(7);
// 회원정보.changeName();
// //함수는 항상 예측가능해야 좋은 함수다.
// type CutType = (x: string) => string;
// let cutZero: CutType = function (x) {
//   if (x[0] === "0") {
//     return x.split("").splice(1).join("");
//   }
// };
// type removeType = (x: string) => number;
// let removeDash: removeType = function (x) {
//   return parseInt(x.split("").join("").replace(/-/g, ""));
// };
// function making(phone: string, func1: CutType, func2: removeType) {
//   let first: string = func1(phone);
//   console.log(func2(first));
//   return func2(first);
// }
// making("010-1111-2222", cutZero, removeDash);
