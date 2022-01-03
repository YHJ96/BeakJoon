const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);
const [count, n] = input;

function solution(count, n) {
    const answer = [];
    const people = [];
    // 사람의 숫자 만큼 people배열에 요소 추가
    for(let i = 1; i <= count; i++) {
        people.push(i);
    }
    // people의 배열에 인자가 없을 때 까지 반복
    while(people.length !== 0) {
        // n 번째 전까지 people의 맨 뒤로 보내기
        for(let i = 1; i < n; i++) {
            const item = people.shift();
            people.push(item);
        }
        // n 번째 사람을 추출한뒤 answer배열에 요소 추가
        answer.push(people.shift());
    }
    // 정답 정제
    return `<${answer.join(', ')}>`;
}

console.log(solution(count, n));