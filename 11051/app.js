const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(arr) {
    const [n, r] = arr;
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: r + 1 }, () => 1));
    // 1C0 ~ nCr 까지 수행하기 위한 2중 반복문 시작
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j <= r; j++) {
            // 시작점과 끝점 예외처리
            if((i === j || j === 0) && dp[i][j] === 1) continue;
            // 이항계수 특징 이용
            dp[i][j] = (dp[i-1][j] + dp[i-1][j-1]) % 10007;
        }
    }
    // 정답 정제
    const answer = dp[n][r];
    return answer;
}

console.log(solution(input));