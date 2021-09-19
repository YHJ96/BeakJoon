const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];

console.log(solution(input));

function solution(n) {
    let answer = '';
    let count = 2;
    while(n !== 1) {
        if(n % count === 0) {
            answer += count + '\n';
            n = n / count;
        } else count++;
    }
    return answer;
}