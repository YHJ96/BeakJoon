const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString();

function solution(n) {
    // n이 90 이하인 수로 int OverFlow 발생해서 Bigint형을 사용하기 위해 n을 붙혀줌 
    const answer = [0n, 1n, 1n];
    // 3번 인덱스 부터 n까지 실행
    for(let i = 3; i <= n; i++) {
        answer[i] = answer[i - 1] + answer[i - 2];
    }
    // 정답 정제
    return answer[n].toString();
}

console.log(solution(input));