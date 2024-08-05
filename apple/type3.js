// let 회원: number | string = 123;
// //Union Type
// let memberz: (number | string)[] = [1, "2", 3];
// let 오브젝트: { a: string | number } = { a: "123" };
// let 이름즈: any;
// //일반 js변수로 만들고 싶을때 쓴다. 타입변수 쓰지 않을때
// //unknown 은 any랑 거의 똑같다 보면됨 조금더 안전하다 요개.. why?
// //unknown은 number타입이아님
// //any보다 unknown은 형식에 맞게 잡아줌 any는 그냥 다 된다보면 됨(위험함)
// let 변수1: string = 이름즈;
// let 나이: unknown = 1;
// // 나이 + 1; 안됨
// let user: string = "kim";
// let age: undefined | number = undefined;
// let married: boolean = false;
// let 철수: (string | boolean | number | undefined)[] = [user, age, married];
// let 학교: {
//   score: (number | boolean)[];
//   teacher: string;
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: "Phil",
//   friend: "John",
// };
// 학교.score[4] = false;
// 학교.friend = ["Lee", 학교.teacher];
