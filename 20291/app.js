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
    let answer = '';
    const result = [];
    const textHash = new Map();
    arr.forEach((item) => {
        const text = item.split('.')[1];
        if(!textHash.has(text)) textHash.set(text, 1);
        else textHash.set(text, textHash.get(text) + 1);
    });
    textHash.forEach((value, key) => {
        result.push([key, value]);
    });
    result.sort((a,b) => {
        return a[0].localeCompare(b[0]);
    });
    for(let item of result) {
        const [name, count] = item;
        answer += `${name} ${count}` + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));