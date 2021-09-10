const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => Number(item));

solution(input[0], input[1], input[2]);

function solution(plus, minus, high) {
    const answer = Math.ceil((high - minus) / (plus - minus));
    console.log(answer);
}