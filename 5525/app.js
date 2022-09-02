const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input[0] = +input[0];
input[1] = +input[1];

// 50점 시간 초과
// dequeue 직접 구현??
function solution(input) {
  let answer = 0;
  const [n, m, s] = input;
  let target = "I";
  const dequeue = [];
  for (let i = 0; i < n; i++) target += "OI";
  for (let i = 0; i < m; i++) {
    const item = s[i];
    dequeue.push(item);
    if (dequeue.length > target.length) dequeue.shift();
    if (dequeue.join("") === target) answer += 1;
  }
  return answer;
}

console.log(solution(input));
