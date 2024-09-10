class User2 {
  protected x = 10;
}
//protected 를 쓰면 class안에서만 쓸 수 있음
//extend를 한 newUser도 못쓰게 할거면 private!
//extend한 클래스는 쓰고 싶게 만들고 싶으면 protected!

//protected : extend된 class는 사용가능, 자식들 사용불가능
//private : 둘다 불가능
class NewUser extends User2 {
  doThis() {
    this.x = 20;
  }
}

//static
class User3 {
  static x = 10; 
  //static을 쓰면 자식들 못쓰게 부모만 써야 될떄 쓰인다.
  y = 20;
}

let children = new User3();
console.log(children);
//static된 데이터는 안나옴 (못씀)
