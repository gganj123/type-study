var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function func() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    //array타입 지정하듯이 rest도 []로 지정하면 된다.
    console.log(a);
}
func(1, 5, 3, 2, true, "m", 5);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
//잠깐 destructuring 개념설명
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수2);
//object자료
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
var object = { student: false, age: 30 };
function 함수(a, b) {
    console.log(a, b);
}
함수(object.student, object.age);
//함수를 이런식으로 쓸 수 있다.
//좀더 간편하게?
function func2(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
func2({ student: true, age: 20 });
//숙제1
var UserType = {
    user: string,
    comment: number[],
    admin: boolean,
};
function func3(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
func3({ user: 'kim', comment: [3, 5, 4], admin: false });
var WineType;
