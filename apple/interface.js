//타입과 입터페이스의 차이점
//interface는 중복선언 가능
//type은 중복선언 불가능
var Rec = {
    color: "red",
    width: 100,
};
var stu = { name: "kim", score: 40 };
var tea = { name: "kim", age: 20, score: 40 };
var prod = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var cart = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var oper = {
    plus: function (num1, num2) {
        return num1 + num2;
    },
    minus: function (num1, num2) {
        return num1 - num2;
    },
};
