const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];

console.log(solution(input));

function solution(n) {
    let answer = 0;
    for(let i = 5; i <= n; i *= 5) {
        console.log(i);
        answer += Math.floor(n / i);
    }
    return answer;
}