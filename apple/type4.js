function 함수(x) {
    x * 2;
}
//number? 이거나 number|undefined 랑 똑같음
//void는 return 이 없는 빈것을 의미함
function 홍길동(x) {
    if (typeof undefined) {
        console.log("이름이 없습니다.");
    }
    console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x));
}
function Wordlength(x) {
    return x.toString().length;
}
function CanMarry(money, 집보유여부, 매력점수) {
    var score = 0;
    if (집보유여부) {
        score += 500;
    }
    if (매력점수 == "상") {
        score += 100;
    }
    score += money;
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(CanMarry(100, true, "상"));
