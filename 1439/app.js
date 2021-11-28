const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(arr) {
    const num = [...arr].map((item) => +item);
    let countZero = 0;
    let countOne = 0;
    if(num[0] === 1) countOne += 1;
    else countZero += 1;

    for(let i = 0; i < num.length - 1; i++) {
        if(num[i] !== num[i+1]) {
            if(num[i+1] === 1) countOne += 1;
            else countZero += 1;
        }
    }
    
    const answer = Math.min(countZero, countOne);
    return answer;
}

console.log(solution(input[0]));