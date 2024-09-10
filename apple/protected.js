var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User2 = /** @class */ (function () {
    function User2() {
        this.x = 10;
    }
    return User2;
}());
//protected 를 쓰면 class안에서만 쓸 수 있음
//extend를 한 newUser도 못쓰게 할거면 private!
//extend한 클래스는 쓰고 싶게 만들고 싶으면 protected!
//protected : extend된 class는 사용가능, 자식들 사용불가능
//private : 둘다 불가능
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User2));
//static
var User3 = /** @class */ (function () {
    function User3() {
        //static을 쓰면 자식들 못쓰게 부모만 써야 될떄 쓰인다.
        this.y = 20;
    }
    User3.x = 10;
    return User3;
}());
var children = new User3();
console.log(children);
//static된 데이터는 안나옴 (못씀)
var User4 = /** @class */ (function () {
    function User4() {
        this.intro = User4.skill + " 전문가입니다.";
        //static으로 가져왔으면 this로 가져올 수 없음 className으로 가져와야함
    }
    User4.skill = "js";
    return User4;
}());
var cal = new User4();
console.log(cal);
//static이기 떄문에 User4클래스로만 들어가면 변경은 할 수 있다 (유용)
User4.skill = "ts"; // 여기서부터 뽑는 자식들은 전부 ts
var cal2 = new User4();
console.log(cal2);
//다음 x,y,z속성의 특징을 설명해보기
// class User {
//   private static x = 10;
//   public static y = 20;
//   protected z = 30;
// }
//숙제2
var User5 = /** @class */ (function () {
    function User5() {
    }
    User5.addOne = function (a) {
        console.log((User5.x += a));
    };
    User5.printX = function () {
        console.log(User5.x);
    };
    User5.x = 10;
    User5.y = 20;
    return User5;
}());
User5.addOne(3);
User5.addOne(4);
User5.printX();
//숙제3
var Square = /** @class */ (function () {
    function Square() {
    }
    return Square;
}());
var 네모 = new Square(30, 30, "red");
네모.draw();
