const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(input));

function solution(n) {
    // 서로 다른 자연수의 합중에 최대값은 1부터 자연수를 올림차순으로 더하는 방식 cnt 1 초기화
    let cnt = 1;
    // 자연수를 넣을 빈 배열 선언
    const answer = [];
    // 반복분 n이 0보다 작아지거나 0 일때 멈춤
    while(n >= 0) {
        n -= cnt;
        // cnt 값 answer에 넣어줌
        answer.push(cnt);
        cnt++;
    }
    // n이 0이면 answer의 마지막 인덱스 출력 (예외처리)
    if(n === 0) return answer[answer.length - 1];
    // n이 음수이면 마지막 인덱스의 앞의 인덱스 출력
    return answer[answer.length - 2];
}