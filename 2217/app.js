const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => +item);
console.log(solution(input));
function solution(n) {
    n.sort((a, b) => a - b);
    let answer = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n.length; i++) {
        if (answer < n[i] * (n.length - i)) answer = n[i] * (n.length - i);
    }
    return answer;
}