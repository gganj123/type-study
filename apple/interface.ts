type Animal = { name: string };
type Cat = { age: number } & Animal;
//&은 extend랑 약간다름
//두타입을 전부 만족하는 타입이라는 뜻!
//& 쓸때 중복속성 발생하면?
//Cat 에 age:string을 추가할때 처음에 에러는 안나지만,
//생성할때 에러가 never로 뜬다. 미리주의!
//결론은 ? interface가 좀더 안전하고 유연하다.
interface Square {
  color: string;
  width: number;
}
//타입과 입터페이스의 차이점
//interface는 중복선언 가능
//type은 중복선언 불가능

let Rec: Square = {
  color: "red",
  width: 100,
};

interface Student {
  name: string;
}
//중복가능..
interface Student {
  score: number;
}
//이렇게 될 경우엔 두개의 데이터가 합쳐진다라고 보면됨 'extend효과!'
//하지만 type은 엄격해서 안됨
interface Teacher extends Student {
  age: number;
}

let stu: Student = { name: "kim", score: 40 };
let tea: Teacher = { name: "kim", age: 20, score: 40 };

//과제1

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let prod: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};
