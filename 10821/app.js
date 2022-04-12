const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(s) {
    // split 메소드로 ','의 간격으로 나누기
    const num = s.split(",");
    // 숫자의 개수를 answer에 할당
    const answer = num.length;
    return answer;
}

console.log(solution(input));