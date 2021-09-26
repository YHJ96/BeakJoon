const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    inputArray.push(input[i].trim());
}

console.log(solution(inputArray));

function solution(arr) {
    const result = [];
    let stack = [];
    for(let x of arr) {
        if(x.includes('push')) {
           const item = +x.split(' ')[1];
           stack.push(item);
        } else if(x === 'pop') {
            if(stack.length !== 0) {
                result.push(stack[stack.length - 1]);
                stack.pop();
            } else result.push(-1);
        } else if(x === 'size') {
            result.push(stack.length);
        } else if(x === 'top') {
            if(stack.length === 0) result.push(-1);
            else result.push(stack[stack.length - 1]);
        } else if(x === 'empty') {
            if(stack.length === 0) result.push(1);
            else result.push(0);
        }
    }
    let answer = '';
    for(let value of result) {
        answer += value + '\n';
    }
    return answer.trimEnd();
}