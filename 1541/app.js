const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(input[0]));

function solution(s) {
    // -가 없는 수식일 경우 인자의 합을 return 
    if(s.indexOf('-') === -1) {
        return s.split('+').map((item) => +item).reduce((acc, curr) => acc + curr, 0);
    }
    // -로 나눈다음 인자들을 + 해주고 첫번째 - 이전에 있는 값들을 + 해준뒤 빼주면 최솟값
    s = s.split('-');
    // 첫번째 - 예외처리
    let answer = s[0].split('+').map((item) => +item).reduce((acc,curr) => acc + curr);
    for(let i = 1; i < s.length; i++) {
        // 나머지 숫자들을 + 기준으로 나누고 인자값 다 더하기
        const sum = s[i].split('+').map((item) => +item).reduce((acc,curr) => acc+curr);
        // 첫번째 인자부터 sum을 다 빼주면 최솟값
        answer -= sum;
    }
    return answer;
}


/* 예외처리가 1개만 되어있던 코드

function solution(s) {
    if(s.indexOf('-') === -1) {
        return s.split('+').map((item) => +item).reduce((acc, curr) => acc + curr);
    }
    s = s.split('-');
    let answer = +s[0];
    for(let i = 1; i < s.length; i++) {
        const sum = s[i].split('+').map((item) => +item).reduce((acc,curr) => acc+curr);
        answer -= sum;
    }
    return answer;
}
*/

// 1. 예외처리를 잘 확인하기. 