let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반가워요";
}

// if(제목 instanceof Element) 이것도 가능...이걸 많이 쓰게 될것임
//let 제목 = document.querySelector("#title") as Elemant; 도 가능하지만 무조건 이걸로 해달라고 부탁하는 형식 (비상시나 100% 확신할떄만..)

if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워요";
}
//옵셔널체이닝 if문 앞에 ?를 붙임으로써 object가 없을시 undifined처리가 됨

let 링크 = document.querySelectorAll(".naver");

링크.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "http://kakao.com";
  }
});
//이것은 Element로 단순히 한다고 해서 지정이 안된다 a태그에 정확한
//명칭인 HTMLAnchorElement로 지정해줘야 인식된다.
let 이미지 = document.querySelector("#image");

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function changeImg() {
  //버튼명에 ? 로 undefined로 유니온타입을 지정해주므로써 Narrowing
  //인정이 됨!
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
  }
});
