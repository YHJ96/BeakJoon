const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(n, target) {
  let answer = 0;
  const start = n;
  const end = target;
  const ch = Array({length : 100001 }, () => 0);
  const queue = [[start, 0]];
  while(queue.length) {
    const [pos, t] = queue.shift();
    if(ch[pos] === 1) continue;
    ch[pos] = 1;
    if(pos === end) {
      answer = t;
      break;
    }
    if(pos * 2 <= 1000000) queue.push([pos * 2, t + 1]);
    if(pos + 1 <= 1000000) queue.push([pos + 1, t + 1]);
    if(pos - 1 >= 0) queue.push([pos - 1, t + 1]); 
  }
  return answer;
}

console.log(solution(input[0], input[1]));