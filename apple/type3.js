var 회원 = 123;
//Union Type
var memberz = [1, "2", 3];
var 오브젝트 = { a: "123" };
var 이름즈;
//일반 js변수로 만들고 싶을때 쓴다. 타입변수 쓰지 않을때
//unknown 은 any랑 거의 똑같다 보면됨 조금더 안전하다 요개.. why?
//unknown은 number타입이아님
//any보다 unknown은 형식에 맞게 잡아줌 any는 그냥 다 된다보면 됨(위험함)
var 변수1 = 이름즈;
var 나이 = 1;
// 나이 + 1; 안됨
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
