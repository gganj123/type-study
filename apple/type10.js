var Person = /** @class */ (function () {
    //변수를 미리 만들어놔야 this.이 가능
    function Person(a) {
        this.name = a;
        //data = 0 ; 필드값
        // data: number = 0;
    }
    Person.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person;
}());
Person.prototype.함수 = function () { };
var 사람1 = new Person("kim");
var 사람2 = new Person("park");
사람1.함수("안녕");
// console.log(사람1.data);
console.log(사람2);
