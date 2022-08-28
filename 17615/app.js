const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(target) {
  let answer = Number.MAX_SAFE_INTEGER;
  // 나올 수 있는 모든 경우의 수를 저장
  const case_ = [
    { color: "R", way: "right" },
    { color: "R", way: "left" },
    { color: "B", way: "right" },
    { color: "B", way: "left" },
  ];
  // 경우의 수 만큼 순회
  for (let i = 0; i < 4; i++) {
    const ball = [...target];
    const { color, way } = case_[i];
    let isCheck = false;
    let count = 0;
    // 방향이 오른쪽으로 진행하면 방향을 뒤집어서 검사
    if (way === "right") ball.reverse();

    for (let j = 0; j < ball.length; j++) {
      // 해당 색깔이랑 다른 공을 만나면 true
      if (ball[j] !== color) isCheck = true;
      // 다른 공을 만난 순간 부터 색깔 공 count 증가 진행
      if (isCheck && ball[j] === color) count += 1;
    }
    // 최소값 정제
    answer = Math.min(answer, count);
  }
  return answer;
}

console.log(solution(input[1]));
