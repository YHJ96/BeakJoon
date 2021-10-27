const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');

solution(input[0], input[1]);

function solution(num1, num2) {
    // 숫자 뒤집기
    let newNum1 = [...num1].reverse();
    let newNum2 = [...num2].reverse();
    newNum1 = +newNum1.join('');
    newNum2 = +newNum2.join('');
    const answer = Math.max(newNum1, newNum2);
    console.log(answer);
}