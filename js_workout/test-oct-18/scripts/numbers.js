// 10개의 값 중
// 최대값, 최소값, 중앙값,
// 최대와 최소를 제외한 합계 구하기

"use strict";

// 함수 선언
// 1 ~ 100 사이의 정수를 무작위로 생성하는 함수
function randomInt1to100() {
  return Math.floor(Math.random() * 100) + 1;
}


// 변수 설정
let maximum; // 최대값
let minimum; // 최소값
let arrangedSum; // 숫자 중 최대와 최소를 제외한 수들의 합계
let evenMedian;  // 짝수 개의 숫자로 이루어진 배열의 중앙값값


// 10개의 값 생성하기
let valuesLength = 10; // 배열의 전체 길이
let values = new Array(valuesLength); // 값들을 저장할 배열

for(let i = 0; i < valuesLength; i++) {  // 1 ~ 100 사이의 정수를 중복되지 않도록 무작위 생성한다.
  let newNum;  // 생성한 수를 저장할 변수

  // 중복값 검사: 중복값이면 숫자를 새로 생성한다.
  do {
    newNum = randomInt1to100();  // 함수를 호출해 랜덤한 숫자를 뽑는다.
  } while (values.includes(newNum));
  
  values[i] = newNum;  // 중복값이 아니면 숫자를 배열에 저장한다.
}

document.write(`값들의 리스트: [${values}]`);  // 생성된 배열 확인
document.write("<br>");

// 배열을 정렬하여 최대값, 최소값, 중앙값 구하기
values.sort((a, b) => a - b);  // 배열을 오름차순 정렬한다.

// 정렬 후 배열 확인
document.write(`오름차순 정렬 후: [${values}]`);
document.write("<br>");

maximum = values.at(-1);  // 최대값
minimum = values[0];  // 최소값

// 중앙값 구하기
// 배열의 가운데에 위치한 두 요소의 평균값
let median1 = values[values.length / 2 -1];  // values[4]
let median2 = values[values.length / 2];  // values[5]

evenMedian = (median1 + median2) / 2;  // 중앙값

// 최대와 최소를 제외한 합계 구하기
// 총 합계 구하기
let sum = 0;  // 수들의 총합을 저장할 변수

values.forEach(num => {  // 10개 숫자의 총합
  sum += num
});

arrangedSum = sum - maximum - minimum;

// 구한 값들을 출력하기
document.write("최대값 : " + maximum + '<br>');
document.write("최소값 : " + minimum + '<br>');
document.write("중앙값 : " + evenMedian + '<br>');
document.write("최대와 최소를 제외한 합계 : " + arrangedSum);