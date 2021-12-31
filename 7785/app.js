const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let x of input) {
    const item = x.trim();
    inputArray.push(item);
}

function solution(arr) {
    const check = new Map();
    for(let x of arr) {
        const [name, state] = x.split(' ');
        if(state === 'enter') check.set(name, state);
        else check.delete(name);
    }
    const answer = [...check.keys()];
    answer.sort().reverse();
    return answer.join('\n');
}

console.log(solution(inputArray));