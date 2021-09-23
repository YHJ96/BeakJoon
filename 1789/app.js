const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(input));

function solution(n) {
    let cnt = 1;
    const answer = [];
    while(n >= 0) {
        n -= cnt;
        answer.push(cnt);
        cnt++;
    }
    if(n === 0) return answer[answer.length - 1];
    return answer[answer.length - 2];
}