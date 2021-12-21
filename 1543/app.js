const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const str = input[0].trim();
const compare = input[1];

function solution(str, compare) {
    const item = str.split(compare).join('0');
    const answer = [...item].filter((item) => item === '0');
    return answer.length;
}

console.log(solution(str, compare));