const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item, index) => {
    if (index === 1) return item.split(' ').map(Number);
    return Number(item);
});

function solution(arr) {
    const [n, card] = arr;
    // 카드를 1번 부터 시작하기 위해서 구조분해할당으로 생성
    const dp = [0, ...card];
    // 카드의 범위 2부터 비교 시작
    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            // 해당 카드의 개수에서 최소의 값을 찾아 dp에 저장한다.
            dp[i] = Math.min(dp[i], dp[i-j] + card[j-1])
        }
    }
    // 정답 정제
    const answer = dp[n];
    return answer;
}

console.log(solution(input));