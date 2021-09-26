const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);
console.log(solution(input[0], input[1], input[2], input[3]));

function solution(x, y, w, h) {
    let answer = [x, y];
    answer[2] = Math.abs(x - w);
    answer[3] = Math.abs(y - h);
    return Math.min(...answer);
}