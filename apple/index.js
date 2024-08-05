var 이름 = "kim";
function 함수(x) {
    return x * 2;
}
함수(123);
var john = [13, true]; //array에 쓸 수 있는 tuple타입
var johns = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
