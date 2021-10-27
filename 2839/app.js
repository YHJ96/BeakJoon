const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    let answer = 0;
    while(true) {
        // n이 5의 약수인지 확인
        if(n % 5 === 0) {
            // 5의 약수면 몫 더해주기
            answer = n / 5 + answer;
            break;
        }

        if(n < 0) {
            // n이 0보다 작으면 예외처리
            answer = -1;
            break;
        }

        //n이 5의 약수가 아닐경우 -3
        n -= 3;
        answer++;
    }
    console.log(answer);
}