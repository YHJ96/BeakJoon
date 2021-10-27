const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => Number(item));

solution(input);

function solution(n) {
    let times = `${n[0] * n[1] * n[2]}`;
    let answer = Array(10).fill(0);
    times = [...times.toString()];
    // 1 ~ 9 체크
    for (let i = 0; i < times.length; i++) {
        if (times[i] === '0') {
            answer[0] = answer[0] + 1;
        } else if (times[i] === '1') {
            answer[1] = answer[1] + 1;
        } else if (times[i] === '2') {
            answer[2] = answer[2] + 1;
        } else if (times[i] === '3') {
            answer[3] = answer[3] + 1;
        } else if (times[i] === '4') {
            answer[4] = answer[4] + 1;
        } else if (times[i] === '5') {
            answer[5] = answer[5] + 1;
        } else if (times[i] === '6') {
            answer[6] = answer[6] + 1;
        } else if (times[i] === '7') {
            answer[7] = answer[7] + 1;
        } else if (times[i] === '8') {
            answer[8] = answer[8] + 1;
        } else if (times[i] === '9') {
            answer[9] = answer[9] + 1;
        }
    }
    answer = answer.map((item) => item + '\n');
    answer = answer.join('');
    console.log(answer);
}