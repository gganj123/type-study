// type Animal = string | number | undefined;
// let 동물: Animal = 123;
// //type alias 만드는 것

// type Animal2 = { name: string; age: number };
// let 동물2: Animal2 = { name: "kim", age: 20 };
// //type변수 작명할때 대문자시작으로 하는게 보편적

// const 출생지역 = { region: "seoul" };
// 출생지역.region = "bsuan";
// //const변수는 등호로 재할당만 막는 거고 object수정은 자유롭게 가능

// type Girlfriend = {
//   readonly name: string;
// };

// const 여친: Girlfriend = {
//   name: "앰버",
// };
// // 여친.name = "유라";
// //readonly쓰면 object 자료수정도 막을 수 있음
// //에러가 나는것이지 실행을 막진 않음 js페이지 가면 실행되고 바꿔주고 있음

// type Name = string;
// type Age = number;
// type Person = Name | Age;
// //type 변수를 union type으로 합치기 가능

// type PositionX = {
//   x: number;
// };

// type PositionY = {
//   y: number;
//   x: number;
// };

// type NewType = PositionX & PositionY;

// let position: NewType = { x: 10, y: 20 };

// //&연산자로 object 타입 합치기 (extend하기)

// //(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.

// // 1. 이 타입은 object 자료형이어야합니다.

// // 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.

// // 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

// // 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.

// type momen = {
//   color?: string;
//   size: number;
//   readonly position: number[];
// };

// let 테스트용: momen = {
//   size: 123,
//   position: [1, 2, 3],
// };

// type Info = { name: string; phone: number; email: string };

// let me: Info = { name: "kim", phone: 123, email: "abc@naver.com" };

// type age = { child: boolean };

// type user = Info & age;
