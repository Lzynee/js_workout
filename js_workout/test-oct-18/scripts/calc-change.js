// 잔돈 갯수 계산하기
// 잔돈은 총 3,470원
// 화폐 단위는 1000원, 500원, 100원, 50원, 10원

"use strict";

// 변수 설정
let money = 3470; // 잔돈
let units = [1000, 500, 100, 50, 10]; // 화폐 단위를 저장하는 배열
let count = new Array(units.length); // 단위별로 필요한 개수를 저장하는 배열
let countType; // 화폐의 종류(지폐 / 동전)에 따라 세는 단위(장 / 개)를 저장하는 배열

// 프로그램 실행 시 메시지 출력
document.write(`잔돈 총액: ${money}원`);
document.write("<br><br>");
document.write("필요한 화폐: ");
document.write("<br><br>");

// 화폐 단위별로 필요한 잔돈을 계산해 출력하기
for (let i = 0; i < units.length; i++) {
  if (i == 0) {
    count[i] = Math.floor(money / units[0]); // 천원 지폐의 개수
    countType = "장";
  } else {
    count[i] = Math.floor((money % units[i - 1]) / units[i]); // 500원 ~ 10원 동전의 개수
    countType = "개";
  }
  document.write(`${units[i]}원 : ${count[i]}${countType}`);
  document.write("<br>");
}
