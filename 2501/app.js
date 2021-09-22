const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input[0], input[1]));

function solution(num, n) {
    const answer = [];
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            answer.push(i);
        }
    }
    if(answer.length <= n - 1) return 0;
    return answer[n - 1];
}