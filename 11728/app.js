const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].trim().split(' ').map((item) => +item);
    inputArray.push(...inputValue);
}

function solution(arr) {
    const filterNum = new Set([...arr]);
    const answer = [...filterNum];
    answer.sort((a,b) => a-b);
    return answer.join(' ');
}

console.log(solution(inputArray));