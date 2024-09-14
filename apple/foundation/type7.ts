// //더 엄격한 타입지정 가능
// //Literal types
// let 이름: "kim"; // 이변수엔 무조건 저것만 들어올수 잇음

// let 접니다: "대머리" | "솔로";
// 접니다 = "대머리";

// function 함수(a: "hello"): 1 | 0 {
//   return 1;
// }
// 함수("hello");

// //1. 가위 바위 보 중 1개 입력가능
// //2. 가위 바위 보 만 들어올 수 있는 array를 return 해야함
// type Rps = "가위" | "바위" | "보";

// function game(x: Rps): Rps[] {
//   return ["가위"];
// }

// game("가위");

// var 자료 = {
//   name: "kim",
// } as const;

// function 내함수(a: "kim") {}
// 내함수(자료.name);
