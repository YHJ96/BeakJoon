const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(arr) {
    const [n, ...step] = arr;
    const dp = Array.from({ length: n }, () => 0);
    // dp의 최적의 경우의 수로 초기화
    dp[0] = step[0];
    dp[1] = step[0] + step[1];
    // 계단을 오르는 방법은 2가지이다. 처음에 점프를 하고 한칸을 올라가거나 처음에 한칸을 올라가고 점프를 해야함으로 dp[2]까지 초기화한다.
    dp[2] = Math.max(step[0] + step[2], step[1] + step [2]);
    for(let i = 3; i < n; i++) {
        // 점프를 하고 한칸을 올라가는 방식
        const add1 = step[i] + step[i - 1] + dp[i - 3];
        // 처음에 한칸을 올라간뒤 점프 하는방식
        const add2 = step[i] + dp[i - 2];
        // 최대값을 dp에 넣는다.
        dp[i] = Math.max(add1, add2);
    }
    // 정답 정제
    const answer = dp[n - 1];
    return answer;
}

console.log(solution(input));