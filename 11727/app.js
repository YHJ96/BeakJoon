const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
    // dp 초기화
    const dp = [0, 1, 3];
    for(let i = 3; i <= n ; i++) {
        // 타일을 2 * 1을 추가해서 공간을 차지하면 dp[i - 1] 모양이고 1 * 2와 2 * 2의 모양은 dp[i - 2] 모양이므로 dp[i * 2] * 2의 형태이다.
        dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
    }
    // 정답 정제
    const answer = dp[n];
    return answer;
}

console.log(solution(input));