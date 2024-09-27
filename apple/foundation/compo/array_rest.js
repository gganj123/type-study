var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 멍멍 = ["dog", true];
//array자료에 붙일 수 있는 tuple type
//boolean 뒤에 ? 를 치고 싶으면 array에 항상 맨뒤에만 가능하다.
//세개 만들고 두번쨰에 하면 오류!
function 함슈() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
function 함슈2(a, b) {
    console.log([a, b]);
}
//둘다 똑같다
함슈(1, "2");
//rest parameter
var arr = [1, 2, 3, 765, 4];
var arr2 = __spreadArray([4, 5], arr, true);
var arrr = ["짜장면", 3500, true, true, true, false, true];
function study3func(x) {
    console.log(x);
}
//문자 숫자 분류기 만들기
function study4func() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (e) {
        if (typeof e === "string") {
            result[0].push(e);
        }
        else {
            result[1].push(e);
        }
    });
    return result;
}
study4func("b", 5, 6, 8, "a", 6);
