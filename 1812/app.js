const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => +item);

function solution(arr) {
    // 구조분해할당을 이용해서 나누기
    const [n, ...num] = arr;
    // 정답 배열 초기화
    const answer = Array.from({ length: n }, () => 0);
    // 사탕의 최소범위와 최대범위로 범위를 정하여 반복문
    for (let i = 0; i <= 100000; i++) {
        // 모든 숫자가 합으로 연계되 있으므로 맨 첫 숫자에 따라서 결과 도출
        answer[0] = i;
        // 점화식이 a[n + 1] = a[n] - b[n]이 되므로 반복문 수행
        for (let j = 0; j < num.length - 1; j++) {
            const item = Math.abs(num[j] - answer[j]);
            answer[j + 1] = item;
        }
        // 맨 끝자리의 합과 맨 첫자리의 합을 계산
        const add = answer[0] + answer[answer.length - 1];
        // 사탕의 합의 마지막 숫자와 add가 같다면 사탕의 수가 정확함으로 return
        if(num[num.length - 1] === add) return answer.join("\n");
    }
}

console.log(solution(input));