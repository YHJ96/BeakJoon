const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let x of input) {
    const item = x.trim();
    inputArray.push(item);
}

function solution(arr) {
    let answer = 'Valid';
    const check = new Set([...arr]);
    if(check.size !== arr.length) answer = 'Invalid';
    return answer;
}

console.log(solution(inputArray));