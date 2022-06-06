const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
    let answer = "";
    let count = 0;
    while(n !== 0) {
        // 게임을 진행 3보다 작으면 1을 가져감
        if (n < 3) n -= 1;
        // 게임을 진행 3보다 크면 3일 가져감
        else n -= 3;
        count += 1;
    }
    // 게임 진행 횟수가 홀수라면 상근 승
    if(count % 2 === 1) answer = "SK";
    // 게임 진행 횟수가 짝수라면 창영 승
    else answer = "CY";
    return answer;
}

console.log(solution(input));