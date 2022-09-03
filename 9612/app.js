const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];

for (let i = 1; i < input.length; i++) inputArray.push(input[i]);

function solution(arr) {
  let answer = [];
  let max = 0;
  const words = new Map();
  // words의 요소만큼 순회
  for (let word of arr) {
    // 요소가 있으면 + 1 없으면 1 등록
    if (words.has(word)) words.set(word, words.get(word) + 1);
    else words.set(word, 1);
  }
  // 최대값 출력
  words.forEach((item) => {
    if (item > max) max = item;
  });
  // 최대값에 해당되는 요소 저장
  words.forEach((item, index) => {
    if (item === max) answer.push(index);
  });
  // 사전순 정렬
  answer.sort((a, b) => a.localeCompare(b));
  // 정답 정제
  return [answer[answer.length - 1], words.get(answer[answer.length - 1])].join(
    " "
  );
}

console.log(solution(inputArray));
