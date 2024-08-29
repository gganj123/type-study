class Person {
  name: string;
  //변수를 미리 만들어놔야 this.이 가능
  constructor(a: string) {
    this.name = a;
    //data = 0 ; 필드값
    // data: number = 0;
  }
  함수(a: string) {
    console.log("안녕" + a);
  }
}

Person.prototype.함수 = function () {};

let 사람1 = new Person("kim");
let 사람2 = new Person("park");

사람1.함수("안녕");
// console.log(사람1.data);
console.log(사람2);
