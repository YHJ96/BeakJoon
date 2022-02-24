const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    let answer = 0;
    // 자료구조 Stack을 활용
    const stack = [];
    // 문자열의 길이만큼 반복
    for(let i = 0; i < s.length; i++) {
        // 만약 괄호가 ')'이면서 Stack에 '(' 없을 경우 올바르지 않은 괄호로 취급하여 answer + 1
        if(s[i] === ')' && stack.length === 0) answer += 1;
        // 괄호가 ')'이면서 Stack에 '(' 있을 경우 Stack에서 괄호 빼기
        else if(s[i] === ')' && stack.length !== 0) stack.pop();
        // 괄호가 '(' 일경우 Stack에 넣기
        else stack.push(s[i]);
    }
    // answer이랑 stack에 괄호가 남아있으면 더해서 정답 정제
    return answer + stack.length;
}

console.log(solution(input));