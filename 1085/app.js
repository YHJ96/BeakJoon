const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(x, y, w, h) {
    // x,y 가 점의 위치 w,h가 사각형 대각선 모서리 좌표
    let answer = [x, y];
    // 절대값 연산
    answer[2] = Math.abs(x - w);
    answer[3] = Math.abs(y - h);
    // 최솟값 비교
    return Math.min(...answer);
}

console.log(solution(input[0], input[1], input[2], input[3]));