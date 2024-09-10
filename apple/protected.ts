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

class User4 {
  static skill = "js";
  intro = User4.skill + " 전문가입니다.";
  //static으로 가져왔으면 this로 가져올 수 없음 className으로 가져와야함
}

let cal = new User4();
console.log(cal);

//static이기 떄문에 User4클래스로만 들어가면 변경은 할 수 있다 (유용)
User4.skill = "ts"; // 여기서부터 뽑는 자식들은 전부 ts

let cal2 = new User4();
console.log(cal2);

//다음 x,y,z속성의 특징을 설명해보기
// class User {
//   private static x = 10;
//   public static y = 20;
//   protected z = 30;
// }

//숙제2
class User5 {
  private static x = 10;
  public static y = 20;
  static addOne(a: number) {
    console.log((User5.x += a));
  }

  static printX() {
    console.log(User5.x);
  }
}

User5.addOne(3);
User5.addOne(4);
User5.printX();

//숙제3
class Square {}
let 네모 = new Square(30, 30, "red");
네모.draw();
