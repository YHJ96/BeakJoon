const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(`\n`);
input = input.map((item) => Number(item));

solution(input[0]);

function solution(num) {
    // 점수출력 문제
    if(num <= 100 && num >= 90) console.log('A');
    else if(num <= 89 && num >= 80) console.log('B');
    else if(num <= 79 && num >= 70) console.log('C');
    else if(num <= 69 && num >= 60) console.log('D');
    else console.log('F');
}