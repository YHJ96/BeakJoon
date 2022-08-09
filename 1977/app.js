const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(arr) {
    const [start, end] = arr;
    const answer = [];
    const compare = [];
    let n = 1;
    // 제곱수가 10000 일때 까지 반복문 실행
    while (n ** 2 <= 10000) {
        // compaer에 제곱수 push
        compare.push(n ** 2);
        n += 1;
    }
    // 제곱수의 요소만큼 반복문 실행
    for (let item of compare) {
        // start, end 사이에 있는 제곱수 추출
        if (item >= start && item <= end) answer.push(item);
    }
    // 예외 처리
    if (answer.length === 0) return -1;
    // 정답 정제
    return [answer.reduce((acc, curr) => acc + curr, 0), answer[0]].join('\n');
}

console.log(solution(input));