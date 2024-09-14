//Generic함수 만들기
function fuccc(x) {
    return x[0];
}
function fucc(x) {
    return x[0];
}
var a = fucc([4, 2]);
var b = fucc(["4", "2"]);
console.log(a);
console.log(b);
//타입파라미터 제한두기
//extend를 타입지정할때는 복사개념이지만 함수에서 이런식으로 쓸떄는
//체크개념이라고 보면 된다.
function fung(x) {
    //extends로 인해 Mytype이 우측에 있는 속성을 가지고있는지 체크
    //넘버타입을 가지고 있다 체크하기위해 쓰는 네로윙같은 인정이됨
    return x.length;
}
fung(["100"]);
function lengthCount(x) {
    console.log(x.length);
}
lengthCount("hello");
lengthCount(["kim", "park", "ggg"]);
var data = '{"name":"dog","age":1}';
function jsonObject(x) {
    return JSON.parse(x);
}
var result = jsonObject(data);
console.log(result);
