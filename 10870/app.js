const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = Number(input[0]);

console.log(solution(input));

function solution(n) {
    // 피보나치 재귀함수
    if(n === 0) return 0;
    if(n === 1) return 1;
    return solution(n-1) + solution(n-2);
}