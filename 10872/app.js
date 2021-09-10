const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = Number(input[0]);

console.log(solution(input));

function solution(n) {
    if(n === 0) return 1;
    return solution(n - 1) * n;
}