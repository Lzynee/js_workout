// 5개의 값 중 중앙값을 찾아 출력하기

"use strict";

// 길이가 5인 숫자의 배열 생성하기
let length = 5;  // 중앙값을 찾을 숫자들의 배열의 길이
let arr = net arr(length);

// 배열에 무작위 숫자 저장하기


let arr = [6, 4, 8, 7, 12]; // 5개의 값을 저장하는 배열

// arr 정렬하기
arr.sort();

// 배열의 중앙값 찾기
let midIndex = Math.floor(arr.length / 2);
let median = arr[midIndex];

document.write(median);
