function func(a) {
    if (a && typeof a === "string") {
        //a가 undefined면 if문실행이 된다 위 문법 기억해보자
    }
}
function fun2(animal) {
    //fish나 bird를 type of 로 쓸수 없다.
    if ("swim" in animal) {
        //in을 이용해서 기능이 들어있냐는 것으로 type 네로윙이 가능
        animal.swim;
    }
}
var Day = new Date();
if (Day instanceof Date) {
    //이런식으로 부모로써 네로윙도 가능함
}
function funcWheel(x) {
    if (x.wheels == "4개") {
        //x가 Car2타입인지 확인하는 네로윙
        console.log("x는 Car타입이에요");
    }
}
