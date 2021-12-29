const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for (let x of input) {
    const item = x.trim();
    inputArray.push(item);
}

function solution(arr) {
    const groupWord = [];
    for(let x of arr) {
        const item = [...x];
        item.sort();
        groupWord.push(item.join(''));
    }
    const answer = new Map();
    for(let x of groupWord) {
        if(!answer.has(x)) answer.set(x, 1);
        else answer.set(x, answer.get(x) + 1);
    }
    return answer.size;
}

console.log(solution(inputArray));