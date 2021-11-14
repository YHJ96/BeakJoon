const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(n, target) {
  let answer = 0;
  const start = n;
  const end = target;
  // check 하면서 재방문 방지
  const ch = Array({length : 100001 }, () => 0);
  // queue 시작지점 지정
  const queue = [[start, 0]];
  while(queue.length) {
    // pos = 현재숫자, t = 횟수
    const [pos, t] = queue.shift();
    if(ch[pos] === 1) continue;
    ch[pos] = 1;
    // 탈출조건
    if(pos === end) {
      answer = t;
      break;
    }
    // 범위조건
    if(pos * 2 <= 1000000) queue.push([pos * 2, t + 1]);
    if(pos + 1 <= 1000000) queue.push([pos + 1, t + 1]);
    if(pos - 1 >= 0) queue.push([pos - 1, t + 1]); 
  }
  return answer;
}

console.log(solution(input[0], input[1]));