const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ');

solution(input[0], input[1]);

function solution(num1, num2) {
    const answer = BigInt(num1)+BigInt(num2);
    console.log(answer.toString());
}