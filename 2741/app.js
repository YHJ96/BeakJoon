const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    let answer = '';
    for(let i = 1; i <= n; i++) {
        if(i === n) answer += i;
        else answer += i + '\n';
    }
    console.log(answer);
}