const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].split(' ').map((item) => +item);
    inputArray.push(item);
}

function findZero(arr) {
    let answer = 0;
    const [start, end] = arr;
    const num = [];
    for(let i = start; i <= end; i++) {
        num.push(i);
    }
    num.forEach((item) => {
        const value = item.toString().split('').map((item) => +item);
        for(let x of value) {
            if(x === 0) answer += 1;
        }
    });
    return answer;
}

function solution(arr) {
    let answer = '';
    for(let x of arr) {
        const item = findZero(x);
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));