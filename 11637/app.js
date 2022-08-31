const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((item) => Number(item));
let n = input.shift();

const ipnutArray = [];

while (n--) {
  const items = [];
  const count = input.shift();
  for (let i = 0; i < count; i++) items.push(input.shift());
  ipnutArray.push(items);
}

function solution(arr) {
  const answer = [];
  // 배열의 요소만큼 순회시작
  for (let i = 0; i < arr.length; i++) {
    // 최대값 추출
    const max = Math.max(...arr[i]);
    // 첫 우승자 추출
    const winner = arr[i].indexOf(max);
    // 우승자가 2명이라면 에외처리
    if (arr[i].indexOf(max, winner + 1) !== -1) {
      answer.push("no winner");
      continue;
    } else {
      // 과반수를 위한 total 초기화
      const total = arr[i].reduce((acc, curr) => acc + curr) / 2;
      // 예외 처리
      if (total < max) answer.push(`majority winner ${winner + 1}`);
      else answer.push(`minority winner ${winner + 1}`);
    }
  }
  // 정답 정제
  return answer.join("\n");
}

console.log(solution(ipnutArray));
