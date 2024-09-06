function neverFun() {
    //never 를 쓰려면? return이 없어야함 (endPoint가 없어야함)
    //모든 함수는 기본적으로 return undefined를 갖는다.
    //안가지게 하려면? 아래와 같이 throw new Error() !
    throw new Error();
    //또는
    //   while(true){
    //계속 도는 반복문 (무한히 반복함)
    //   }
}
//never타입은 어디다쓸까?
//쓸곳이없다 void가 있기 떄문 ,,,하지만 알아야된다 why?
//가끔 작업하다가 never가 등장하기때문,..
function stringFun(parameter) {
    if (typeof parameter == "string") {
        console.log(parameter);
    }
    else {
        console.log(parameter);
    }
}
//이 현상은 never임 (그럴일이 없다...)
//논리적으로 안될 경우 never가 뜨는것임
var funcc = function () {
    throw new Error();
};
//함수에 마우스를 올려보면 never타입이라고 뜬다
//never가 뜨면 내가 지금 뭔가 논리적으로 안맞는 해옫ㅇ을 햇구나
//오류뜰 뭔가를 했구나 생각을 할수 있으면 됨
