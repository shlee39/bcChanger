//0~9와 A~F까지
const hexNumbers="0123456789ABCDEF";
//컬러번호 나오는 부분
const hexColor = document.querySelector("#hex-color");
//배경색 바꾸기 위해 설정
const body = document.querySelector("body");
//버튼
const clickme = document.querySelector("#clickme");

//첫 화면에도 랜덤 컬러 나오게 설정
change();

//색상번호 랜덤하게 설정
function change(){
  let result = "#";
  
  //6개 숫자문자 반복해서 랜덤으로 뽑기
  for(let i=0;i<6;i++){
    let randomIndex = Math.floor(Math.random() * hexNumbers.length);
    result += hexNumbers[randomIndex];
  }
  //컬러번호에 넣기
  hexColor.innerHTML = result;
  //배경색 바꾸기
  body.style.backgroundColor = result;
}

//버튼 클릭시 change()
clickme.addEventListener("click", change);
