const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input;

console.log(solution(input));

// CheckPoint
function solution(n) {
    let i = 1;
    // 대각선 방향으로 i가 행에 포함된 개수이다.
    while(n > i) {
        // n이 몇번 쨰 인지 i가 행인지 구하기
        n -= i;
        i++;
    }
    // i가 짝수면 올라 가기 때문에 x변경
    let answer = `${n}/${i + 1 - n}`;
    // i가 홀수면 내려 가기 떄문에 y변경
    if(i % 2 === 1) answer = `${i + 1 - n}/${n}`;
    return answer;
}

// 1. 좌표평면에서 꼭 규칙찾기