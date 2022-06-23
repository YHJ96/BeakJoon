const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')[1].split(' ').map(Number);

function solution(arr) {
  let answer = '';
  let y = 0;
  let m = 0;
  for(let item of arr) {
    // 변수 2개를 설정해서 시간을 나눠준 뒤 몫을 내림을 적용하고  + 1을 해준 값과 가격을 곱해주기
    const yItem = (Math.floor(item / 30) + 1) * 10;
    const mItem = (Math.floor(item / 60) + 1) * 15;
    // 누적값 계산하기
    y += yItem;
    m += mItem;
  }
  // 예외처리 y와 m의 값 중에 작은 가격을 내보내기
  if (y === m) answer += "Y M " + y;
  else if (y < m) answer += "Y " + y;
  else answer += "M " + m;
  return answer;
}

console.log(solution(input));