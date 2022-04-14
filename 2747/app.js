const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
    // 피보나치 배열의 값을 넣을 배열 초기화
    const fibo = Array.from({ length: n }, () => 0);
    // 첫 번째와 두 번째 피보나치 값을 초기화
    fibo[1] = 1;
    fibo[2] = 1;
    // DP 실행
    for(let i = 3; i <= n; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    // n번째 피보나치의 값을 저장
    const answer = fibo[n];
    return answer;
}

console.log(solution(input));