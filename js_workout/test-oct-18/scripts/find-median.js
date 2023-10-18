// 5개의 값 중 중앙값을 찾아 출력하는 프로그램

"use strict";

// 함수 선언
// 1 ~ 100 사이의 정수를 무작위로 생성하는 함수
function randomInt1to100() {
  return Math.floor(Math.random() * 100) + 1;
}

// 중앙값 구하기
// 중앙값을 구할 숫자들을 무작위 생성하여 배열에 저장한다.
let length = 5; // 배열의 총 길이
let arr = new Array(length);  // 숫자들을 저장할 배열

// 중복되지 않는 무작위 숫자를 배열의 길이만큼 생성
for (let i = 0; i < arr.length; i++) {
  let newNum;  // 무작위로 생성한 수를 저장한 변수

  // 중복값 검사: 중복값이면 숫자를 새로 생성한다.
  do {
    newNum = randomInt1to100();  // 함수를 호출해 랜덤한 숫자를 뽑는다.
  } while (arr.includes(newNum));
  
  arr[i] = newNum;  // 중복값이 아니면 숫자를 배열에 저장한다.
}  // for i

// 생성된 배열 확인
document.write(`처음 생성한 배열: [${arr}]`);
document.write("<br>");

// 배열의 수들을 오름차순으로 정렬하기
arr.sort((a, b) => a - b);

// 정렬 후 배열을 확인
// document.write(`오름차순 정렬 후: [${arr}]`);
// document.write("<br>");

// 숫자들의 중앙값 찾기
// 배열의 전체 길이(5)에서 중간에 해당하는 인덱스(arr[2])에 저장된 값이 중앙값
let median = arr[Math.floor(arr.length / 2)];

// 중앙값 출력하기
document.write(`${length}개 숫자들의 중앙값: ${median}`);