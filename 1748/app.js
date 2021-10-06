const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(+input));

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i *= 10) {
        answer += n - i + 1;
    }
    return answer;
}