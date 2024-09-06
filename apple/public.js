//타입스크립트의 장점?
//타입스크립트에서만 쓸수있는것을 가져와서 쓸수있다
//public private protected static등을 쓸수있다
//class많이 만들어서 개발하려면...
var User = /** @class */ (function () {
    //컨스트럭터를 안써도 되지만, 쓰는 이유가 있다면
    //파라미터를 만들어 줄 수 있다.
    function User(a) {
        //패밀리 네임을 수정이 안되게 하고 싶다? class밖에서도 쓰이면 안된다?
        //그러면 private를 쓰면 된다.
        this.familyName = "kim";
        this.name = a + this.familyName;
    }
    return User;
}());
var User1 = new User("park");
User1.name = "안뇽";
//굳이 안써도 된다.. 왜? 이미 안쓰고도 public기능이 되기떄문에
//아무것도 안쓰고 class에 name을 정의하면 public으로 생략된채로 정의되는거라 보면됨
//갑자기 클래스 밖에서 private 데이터를 바꿔여하는 상황이 생긴다면?
function changeFun() {
    this.familyName = "park";
}
//이렇게 this로 가져와 바꾼다면 바꿀수 있게 된다.
