function func(...a: (string | number | boolean)[]) {
  //array타입 지정하듯이 rest도 []로 지정하면 된다.
  console.log(a);
}

func(1, 5, 3, 2, true, "m", 5);
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

//잠깐 destructuring 개념설명

let [변수1, 변수2] = ["안녕", 100];

console.log(변수2);

//object자료

let { student, age } = { student: true, age: 20 };
let object = { student: false, age: 30 };

function 함수(a: boolean, b: number) {
  console.log(a, b);
}

함수(object.student, object.age);
//함수를 이런식으로 쓸 수 있다.

//좀더 간편하게?
function func2({ student, age }) {
  console.log(student, age);
}

func2({ student: true, age: 20 });

//숙제1

let { user, comment, admin } = {
  user: "kim",
  comment: [3, 5, 4],
  admin: false,
};
