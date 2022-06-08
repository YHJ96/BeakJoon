const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


// A - B - BA - BAB ... i = i-2 + i-1 형태이다.
function solution(n) {
    // 변수 dp 초기화
    const dp = [[1, 0], [0, 1]];
    // A의 개수와 B의 개수를 현재 i - 2 요소와 i - 1 요소와 각각의 자리를 더해줌
    for (let i = 2; i <= n; i++) dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i-1][1] + dp[i-2][1]];
    // 정답 정제
    const answer = dp[n].join(' ');
    return answer;
}

console.log(solution(input));