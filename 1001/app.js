const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ');
input = input.map((item) => Number(item));

function solution(a, b) {
    // 사칙연산
    const answer = a - b;
    return answer;
}

console.log(solution(input[0], input[1])); 