// while 문을 사용해 구구단 출력하기

"use strict";

let dan = 2;

while (dan <= 9) {
  let i = 1;

  while (i <= 9) {
    // 구구단의 각 단을 출력한다.
    document.write(`${dan} * ${i} = ${dan * i}`);
    document.write("<br>");
    i++;
  }

  document.write("<br>");
  dan++;
}
