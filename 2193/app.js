const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
    // number 자료형의 최대를 벗어나기 때문에 Bigint를 사용하기 위해 n 처리
    const dp = [0n, 1n, 1n];
    // 규칙은 d[n] = d[n - 1] + d[n - 2] 처럼 피보나치 수열처럼 올라간다.
    for(let i = 3; i <= n; i++) dp[i] = dp[i-1] + dp [i-2];
    // BigInt 자료형에서 n을 없애주기 위한 문자열로 정제
    const answer = dp[n].toString();
    return answer;
}

console.log(solution(input));