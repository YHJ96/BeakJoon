const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
  let answer = Number.MAX_SAFE_INTEGER;
  // 금액을 5로 나눈 값을 정수로 변수에 초기화
  let count = parseInt(n / 5);
  // 0 ~ count 반복 시작
  for(let i = 0; i <= count; i++) {
    const num = 5 * i;
    // 5 * i 금액 제외
    const target = n - num;
    // 2로 나누어 떨어지는지 확인하고 나누어 떨어진다면 answer와 비교해서 대입
    if (target % 2 === 0) answer = Math.min(answer, i + target / 2);
  }
  // 예외처리
  if (answer === Number.MAX_SAFE_INTEGER) return -1;
  return answer;
}

console.log(solution(input))