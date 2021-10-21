const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);
console.log(solution(input));

// 미해결
function solution(num) {
    const [a, b, c] = num;
    const answer = BigInt(a) ** BigInt(b) % BigInt(c);
    return answer.toString();
}

// 1. 분할정복