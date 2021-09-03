const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    let newNum = [];
    let answer = '';
    for(let i = 1; i <= n; i++) {
        newNum.push(i);
    }
    newNum = newNum.reverse();
    for(let j = 0; j < newNum.length; j++) {
        if(j === newNum.length - 1) answer += newNum[j];
        else answer += newNum[j] + '\n';
    }
    console.log(answer);
}