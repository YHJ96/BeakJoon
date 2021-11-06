const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(arr) {
    let answer = [];
    let max = 0;
    const bH = new Map();
    for(let x of arr) {
        if(bH.has(x)) bH.set(x, bH.get(x) + 1);
        else bH.set(x, 1);
    }
    bH.forEach((item, index) => {
        if(max <= item) {
            max = item;
        }
    });
    bH.forEach((item, index) => {
        if(item === max) answer.push(index);
    });
    answer.sort();
    return answer[0];
}

console.log(solution(inputArray));