const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let x of input) {
    inputArray.push(x.trim());
}
inputArray.pop();

function checkItem(s) {
    let answer = 'yes';
    let stack = [];
    const compare = ['[', ']', '(', ')'];
    s = [...s].filter((item) => compare.includes(item));
    if(s.length === 0) return answer;
    if(s[0] !== '(' && s[0] !== '[') return 'no';
    for(let i = 0; i < s.length; i++) {
        const size = stack.length;
        stack.push(s[i]);
        if(s[i] === ')' && stack[size - 1] === '(' && i - 1 >= 0) {
            stack.pop();
            stack.pop();
        }
        if(s[i] === ']' && stack[size - 1] === '[' && i - 1 >= 0) {
            stack.pop();
            stack.pop();
        }
    }
    if(stack.length !== 0) answer = 'no';
    return answer;
}

function solution(arr) {
    let answer = '';
    for(let x of arr) {
        const item = checkItem(x);
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));