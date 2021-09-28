const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

function solution(n) {
    let n1 = n[0];
    let n2 = n[1];
    let r = 0;
    let max = 0;
    let min = 0;
    while(true) {
      r = n1 % n2;
      n1 = n2;
      n2 = r;
      if(r === 0) {
        max = n1;
        break
      }
    }
    min = (n[0] * n[1]) / max;
    let answer = max + '\n' + min;
    return answer;
}