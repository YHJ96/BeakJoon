const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => +item);
function findWave(n) {
    let answer;
    let dp = Array.from({length: n + 1}, () => 0);
    // dp테이블 초기화
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    // 규칙은 i가 5부터  변이 만나는 지점은 i - 1 , i - 4 이다.
    for(let i = 5; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-5];
    }
    answer = dp[n];
    return answer;
}

function solution(arr) {
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        // 정답 정제
        const item = findWave(arr[i]);
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(input));