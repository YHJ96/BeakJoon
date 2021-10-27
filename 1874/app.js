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
        // count의 크기가 num의 크기와 작거나 같고 stack의 마지막 인자가 들어온 인자랑 같지 않을때 연산실행
        while(count <= num.length && stack[stack.length - 1] != num[j]) {
            stack.push(arr.shift());       
            answer += '+' + '\n';
            count += 1; 
        }
        // stack의 마지막 인자와 num의 인자와 같을때 연산실행
        if(stack[stack.length - 1] === num[j]) {
            stack.pop();
            answer += '-' + '\n';
            // 둘의 조건이 맞지 않을 경우 NO return
        } else return 'NO';
    }
    return answer.trim();
}; 