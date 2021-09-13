const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    let answer = 0;
    while(true) {
        if(n % 5 === 0) {
            answer = n / 5 + answer;
            break;
        }

        if(n < 0) {
            answer = -1;
            break;
        }

        n -= 3;
        answer++;
    }
    console.log(answer);
}