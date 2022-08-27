const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(num) {
  // 숫자만큼 오름차순 정렬
  num = num.sort((a, b) => a - b);
  // 정답 정제
  return num.join(" ");
}

console.log(solution(input));
