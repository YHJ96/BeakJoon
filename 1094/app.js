const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
    let answer = 0;
    // n이 0이면 정지
    while(n > 0) {
        // n이 홀수이면 answer += 1
        if (n % 2 === 1) answer += 1;
        // n을 정수로 바꿔서 재할당
        n = parseInt(n / 2);
    }
    return answer;
}

console.log(solution(input));