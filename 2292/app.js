const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    // 벌집문제 6각형이므로 6 * n만큼 증가 answer를 증가시키면서 숫자찾기
    let max = 1;
    let answer = 1;
    while(max < n) {
        max = max + 6 * answer;
        answer++;
    }
    console.log(answer);
}