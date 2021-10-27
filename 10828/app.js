const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    inputArray.push(input[i].trim());
}

console.log(solution(inputArray));

function solution(arr) {
    // console.log에 바로 출력했는데 시간초과 옛날에도 이런적 있어서 result로 정제후 answer로 폼에 맞게 출력
    const result = [];
    let stack = [];
    for(let x of arr) {
        // 문자열에 push라는 단어가 있는지 확인
        if(x.includes('push')) {
            // 공백으로 구분한 숫자가 넣을 숫자
           const item = +x.split(' ')[1];
           stack.push(item);
        } else if(x === 'pop') {
            // pop연산
            if(stack.length !== 0) {
                result.push(stack[stack.length - 1]);
                stack.pop();
            } else result.push(-1);
        } else if(x === 'size') {
            // 길이체크
            result.push(stack.length);
        } else if(x === 'top') {
            // 제일 위에 있는 스택 값 확인
            if(stack.length === 0) result.push(-1);
            else result.push(stack[stack.length - 1]);
        } else if(x === 'empty') {
            // 배열에 인자가 있는지 없는지 확인
            if(stack.length === 0) result.push(1);
            else result.push(0);
        }
    }
    // 정답 정제
    let answer = '';
    for(let value of result) {
        answer += value + '\n';
    }
    return answer.trimEnd();
} 