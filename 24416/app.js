const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

// 재귀함수
function fibo1(n) {
    if(n === 1 || n === 2) return 1;
    else return fibo1(n-1) + fibo1(n-2);
}

// DP
function fibo2(n) {
    let count = 1;
    const arr = Array.from({ length: n }, () => 0);
    arr[1] = 1;
    arr[2] = 1;
    for(let i = 3; i < arr.length; i++) {
        count++;
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return count;
}

function solution(n) {
    let answer = [fibo1(n), fibo2(n)];
    // 정답 정제
    return answer.join(' ');
}

console.log(solution(input));