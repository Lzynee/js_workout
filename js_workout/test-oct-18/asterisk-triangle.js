// 열마다 별(*)의 개수를 변경하여 출력해서
// 역삼각형 모양을 만들기

// *******
//  ***** +space 1
//   *** +space 2
//    * +space 3

"use strict";

const level = 5; // 출력할 열의 개수

for (let i = 0; i < level; i++) {
  for (let j = 0; j < i; j++) {
    document.write("&nbsp"); //  열 번호가 높아질 때마다 공백의 개수가 한 개씩 증가
  } // for j

  let k = 2 * (level - i) - 1; // 각 열에 출력할 별의 개수
  while ((k > 0, k--)) {
    document.write("*"); // k의 값만큼 *을 출력
  }

  document.write("<br>"); // 별을 출력한 뒤 줄 바꿈
} // for i
