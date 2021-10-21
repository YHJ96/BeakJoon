const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    inputArray.push(+input[i]);
}

console.log(solution(inputArray));

function solution(num) {
    const max = Math.max(...num);
    let arr = [];
    let stack = [];
    let answer = '';
    for(let i = 1; i <= max; i++) {
        arr.push(i);
    }
    for(let j = 0; j < num.length; j++) {
        let count = 1;
        while(count <= num.length && stack[stack.length - 1] != num[j]) {
            stack.push(arr.shift());
            answer += '+' + '\n';
            count += 1; 
        }
        if(stack[stack.length - 1] === num[j]) {
            stack.pop();
            answer += '-' + '\n';
        } else return 'NO';
    }
    return answer.trim();
};