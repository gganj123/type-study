import { 이름, 나이 } from "./a";
//옛날 import없을떄 문법
import { Caz, Bike } from "./a";
import { voidFun } from "./a";

let CZ: Caz = {
  wheel: 4,
  model: "자동차",
};

let BIKE: Bike = {
  wheel: 2,
  model: "자전거2",
};
//지금은 import export 있으니까 알고만 있으면 옛날 문서 볼떄 알아볼순있다..

console.log(이름);

let voidF: voidFun = function (a) {
  console.log(a);
};

voidF({ 구리구리: "부리부리" });
