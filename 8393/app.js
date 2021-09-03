const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => Number(item));

solution(input[0]);

function solution(n) {
    let answer = 0;
    const numArr = [];
    for(let i = 1; i <= n; i++) {
        numArr.push(i);
    }
    for(let j = 0; j < numArr.length; j++) {
        answer += numArr[j];
    }
    console.log(answer);
}