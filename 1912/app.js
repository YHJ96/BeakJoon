const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = input[1].split(' ').map(Number);

function solution(arr) {
    // 초기값 0 설정
    let dp = [0];
    // dp에 배열의 요소를 push 예외처리를 위해서 1번 인덱스 부터 시작
    for(let i = 1; i < arr.length + 1; i++) dp[i] = arr[i - 1];
    // dp의 i번째 인덱스에 현재 값과 i - 1 인덱스와 arr[i - 1]값을 합해서 더 큰쪽을 진행
    for(let i = 1; i < arr.length + 1; i++) dp[i] = Math.max(dp[i], dp[i - 1] + arr[i - 1]);
    const [zero, ...num] = dp;
    // 정답 정제
    const answer = Math.max(...num);
    return answer;
}

console.log(solution(inputArray));