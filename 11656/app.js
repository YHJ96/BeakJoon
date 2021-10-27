const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(input[0]));

function solution(s) {
    // 정답 출력 폼
    let answer = '';
    let result = [];
    for(let i = 0; i < s.length; i++) {
        // 들어온 문자열을 앞에서 하나씩 뺴서 정제
        const value = [...s].splice(i, s.length);
        // 배열을 다시 문자열로 result에 넣기
        result.push(value.join(''));
    }
    // 사전순 정렬
    result = result.sort((a,b) => a.localeCompare(b));
    // 정답 출력을 위해서 answer에 넣어줌
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trimEnd();
} 