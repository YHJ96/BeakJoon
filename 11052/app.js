const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item, index) => {
    if (index === 1) return item.split(' ').map(Number);
    return Number(item);
});

function solution(arr) {
    const [n, card] = arr;
    const dp = Array.from({ length: n+1 }, () => 0);
    // 카드의 범위
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            // 해당 카드의 개수에서 최대 값을 찾아 dp에 저장한다.
            dp[i] = Math.max(dp[i], dp[i-j] + card[j-1])
        }
    }
    // 정답 정제
    const answer = dp[n];
    return answer;
}

console.log(solution(input));