const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
    // 연산자 피연산자 소수점 번호의 변수를 구조분해할당으로 초기화
    let [num1, num2, target] = arr;
    // 숫자의 범위 때문에 Bigint 처리
    let result = BigInt(num1) % BigInt(num2);
    let answer = 0;
    // target이 0이 아닐 때 까지 반복
    while (target-- !== 0) {
        // 초기화된 result에 * 10
        result *= 10n;
        // 몫을 asnwer에 재할당
        answer = result / BigInt(num2);
        // 나머지를 result에 재할당
        result = result % BigInt(num2);
    }
    // Bigint이기 때문에 문자열로 치환 (정답 정제)
    return answer.toString();
}
console.log(solution(input));