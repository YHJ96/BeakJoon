const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0];

function solution(n) {
    // 문자를 배열로 나눈다.
    n = [...n];
    // 문자로 되어있는 숫자의 배열에서 0이 없으면 30의 약수가 아니다.
    if(n.indexOf('0') === -1) return -1;
    // 각 자리의 숫자를 더함
    const sum = n.reduce((acc, curr) => +acc + +curr, 0);
    // 각 자리의 숫자의 합이 3으로 나누어 떨어지지 않는다면 30의 약수가 아님
    if(sum % 3 !== 0) return -1;
    // 문자로 되어있는 숫자를 올림차순 정렬
    n.sort((a,b) => b.localeCompare(a));
    // 정답 정제
    const answer = n.join('');
    return answer;
}

console.log(solution(input));