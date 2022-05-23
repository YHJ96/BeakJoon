const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
    // 문자열을 ","기준으로 나눠준 뒤 숫자 타입으로 변환
    const num = str.split(",").map(Number);
    // reduce를 이용해서 모든 원소 더하기
    const answer = num.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(input));