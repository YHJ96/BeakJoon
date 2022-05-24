const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

function solution(arr) {
    let answer = 0;
    const stack = [];
    for(let i = 0; i < arr.length; i++) {
        // 해당 막대가 시작하면 스택에 넣는다.
        if(arr[i] === '(') stack.push(arr[i]);
        // 막대가 닫는 모양일 경우
        else {
            // 전에 있는 요소가 여는 모양일 경우
            if(arr[i-1] === '(') {
                // 스택에서 빼준다.
                stack.pop();
                // 스택의 길이만큼 answer에 더해준다.
                answer += stack.length;
            } else {
                // 스택에서 빼준다.
                stack.pop();
                // answer + 1
                answer += 1;
            }
        }
    }
    return answer;
}

console.log(solution(input));