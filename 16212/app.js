const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[1].split(' ').map((item) => +item);

function solution(arr) {
    // sort 함수로 오름차순 정렬
    const answer = arr.sort((a,b) => a-b);
    // 정답 정제
    return answer.join(" ");
}

console.log(solution(input));