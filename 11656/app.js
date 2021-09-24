const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(input[0]));

function solution(s) {
    let answer = '';
    let result = [];
    for(let i = 0; i < s.length; i++) {
        const value = [...s].splice(i, s.length);
        result.push(value.join(''));
    }
    result = result.sort((a,b) => a.localeCompare(b));
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trimEnd();
}