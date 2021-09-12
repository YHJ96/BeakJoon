const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    let max = 1;
    let answer = 1;
    while(max < n) {
        max = max + 6 * answer;
        answer++;
    }
    console.log(answer);
}