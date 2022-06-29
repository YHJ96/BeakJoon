const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
input.shift();

// 입력값 잘보기
function solution(arr) {
    const answer = [];
    // dp 초기화
    const dp = [0, 1, 2, 4];
    // 1 2 3만 이용해서 더하고 있으므로 n - 1 n - 2 n - 3이 가지고 있는 값은 그 당시의 모든 가지수를 가지고 있으므로 더해준다.
    for(let i = 4; i <= 1000000; i++) dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % 1000000009;
    // answer에 dp 메모이제이션 값 push
    for(let x of arr) answer.push(dp[x]);
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(input));