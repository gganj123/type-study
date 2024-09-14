var Person2 = /** @class */ (function () {
    //항상 네임속성을 가지고 싶게 만들고싶다면? public!
    //파라미터에 들어오는 것들은 네임속성의 강제로 집어넣어진다 보면됨
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var child = new Person2("kim");
console.log(child);
//
