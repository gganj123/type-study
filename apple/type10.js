var Person = /** @class */ (function () {
    //변수를 미리 만들어놔야 this.이 가능
    function Person(a) {
        //파라미터에 값을 입력 안하면 자동으로 할당해주는 그런걸 지정가능함
        //파라미터에:string 대신 a="kim"을 넣으면 타입지정 안하고 기본 파라미터 값으로 쓰임
        this.name = a;
        this.age = 20;
        //data = 0 ; 필드값
        // data: number = 0;
    }
    Person.prototype.add = function (b) {
        console.log(1 + b);
    };
    return Person;
}());
var 사람1 = new Person("kim");
var 사람2 = new Person("park");
사람1.add(5);
// console.log(사람1.data);
console.log(사람2);
