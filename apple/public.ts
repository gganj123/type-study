//타입스크립트의 장점?
//타입스크립트에서만 쓸수있는것을 가져와서 쓸수있다
//public private protected static등을 쓸수있다
//class많이 만들어서 개발하려면...

class User {
  //public키워드를 쓰면 누구나 가져가서 수정을 할 수 있다.
  //private를 붙이면 이제 그 데이터를 수정할 권한이 없다.
  //수정하려면? class 중괄호 안에서만 수정할 수 있다.
  name: string;
  //패밀리 네임을 수정이 안되게 하고 싶다? class밖에서도 쓰이면 안된다?
  //그러면 private를 쓰면 된다.
  private familyName: string = "kim";
  //컨스트럭터를 안써도 되지만, 쓰는 이유가 있다면
  //파라미터를 만들어 줄 수 있다.
  constructor(a) {
    this.name = a + this.familyName;
  }
}

let User1 = new User("park");
User1.name = "안뇽";
//굳이 안써도 된다.. 왜? 이미 안쓰고도 public기능이 되기떄문에
//아무것도 안쓰고 class에 name을 정의하면 public으로 생략된채로 정의되는거라 보면됨

//갑자기 클래스 밖에서 private 데이터를 바꿔여하는 상황이 생긴다면?
function changeFun() {
  this.familyName = "park";
}
//이렇게 this로 가져와 바꾼다면 바꿀수 있게 된다.

