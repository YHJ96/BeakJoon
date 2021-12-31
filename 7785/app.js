const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let x of input) {
    const item = x.trim();
    inputArray.push(item);
}

function solution(arr) {
    // Map함수 생성
    const check = new Map();
    for(let x of arr) {
        // 분할할당으로 사원의 이름과 상태를 출력
        const [name, state] = x.split(' ');
        // state값이 enter이면 사원을 Map에 저장
        if(state === 'enter') check.set(name, state);
        // state값이 enter가 아니면 삭제
        else check.delete(name);
    }
    // Map함수의 키를 배열로 바꿈
    const answer = [...check.keys()];
    // 사전순 내림차순 정렬
    answer.sort().reverse();
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));