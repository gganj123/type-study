function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
//변수 타입이 아직 불확실하면 if문등으로 Narrowing 해줘야 조작가능
//Narrowing이란 타입을 정확히 하나 찝을수 있게 if문을 사용하느것
function 내함수2(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
//assertion문법(타입 덮어쓰기)써보기 Union타입일 경우에만 확정을 짓고 싶을때 쓸 수 있다!
function 내함수3(x) {
    var array = [];
    array[0] = x; //number로 덮어써주세요
}
function cleaning(x) {
    var clean = [];
    x.forEach(function (b) {
        if (typeof b === "string") {
            clean.push(parseInt(b));
        }
        else {
            clean.push(b);
        }
    });
    return clean;
}
console.log(cleaning([123, "3", "4", 4, "5"]));
var 철수쌤 = { subject: "math" };
var 영희쌤 = {
    subject: ["science", "english"],
};
var 민수쌤 = {
    subject: ["science", "art", "korean"],
};
function books(x) {
    if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else if (typeof x.subject === "string") {
        return x.subject;
    }
}
console.log(books(철수쌤));
console.log(books(영희쌤));
console.log(books(민수쌤));
console.log(books({ subject: ["english", "art"] }));
