const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(arr) {
    const num = [...arr].map((item) => +item);
    let countZero = 0;
    let countOne = 0;
    // 배열 시작 숫자 확인
    if(num[0] === 1) countOne += 1;
    else countZero += 1;
    for(let i = 0; i < num.length - 1; i++) {
        // 배열의 인자가 달라지는 시점 확인
        if(num[i] !== num[i+1]) {
            // 그 숫자가 1이면 1 카운트 증가
            if(num[i+1] === 1) countOne += 1;
            // 아닐경우 0 카운트 증가
            else countZero += 1;
        }
    }
    // 더 작은수를 측정
    const answer = Math.min(countZero, countOne);
    return answer;
}

console.log(solution(input[0]));