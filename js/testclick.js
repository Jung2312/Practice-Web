const overlayButton = document.querySelector("#overlayButton");

// 테스트 하기 버튼 클릭 시 기존 요소 제거
function ontestclick() {
  const clickClass1 = "hidden";
  const clickClass2 = "visible";
  const centerimage = document.querySelector("#center-image");
  centerimage.classList.toggle(clickClass2);
  overlayButton.classList.toggle(clickClass1);
  testpage(clickClass1);
}

// 질문, 답변 출력
function testpage(clickClass) {
  textbox.classList.toggle(clickClass);
}

overlayButton.addEventListener("click", ontestclick);
