const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    let answer = '';
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(j < n - i) {
                answer += ' ';
            } else {
                answer += '*';
            }
        }
        if(i !== n - 1) answer += '\n';
    }
    console.log(answer);
}