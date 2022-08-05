const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input[0] = input[0].split(' ').map(Number);

function solution(arr) {
    let [[n, target], ...str] = arr;
    // 사전순으로 정렬
    str.sort((a, b) => a.localeCompare(b));
    // 정답 정제
    return str[target - 1];
}

console.log(solution(input));