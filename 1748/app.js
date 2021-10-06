const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(+input));

function solution(n) {
    let answer = 0;
    // 1 ~ 9 에서는 자리수가 한개씩 10 ~ 99 자리수가 두개씩 쭉쭉 늘어나기 떄문에 자리수의 합만큼만 더해준다.
    for (let i = 1; i <= n; i *= 10) {
        answer += n - i + 1;
    }
    return answer;
}