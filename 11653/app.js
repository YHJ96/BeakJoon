const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];

console.log(solution(input));

function solution(n) {
    let answer = '';
    // 소인수 분해를 해야함으로 2부터 시작
    let count = 2;
    // n이 1이 될때까지 반복문 실행
    while(n !== 1) {
        // 나머지가 0이라면 answer에 숫자를 넣고 count로 n을 나눈다.
        // 아니면 count를 1씩 증가시킨다.
        if(n % count === 0) {
            answer += count + '\n';
            n = n / count;
        } else count++;
    }
    return answer;
} 