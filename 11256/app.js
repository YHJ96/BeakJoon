const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => item.trim().split(" ").map((item) => +item));
input.shift();
const inputArray = [];

// 문제 input 정제
for(let i = 0; i < input.length; i++) {
    const total = [];
    const n = input[i][1];
    total.push(input[i]);
    for(let j = i + 1; j <= i + n; j++) {
        const item = input[j];
        total.push(item);
    }
    inputArray.push(total);
    i += n;
}

// 상자의 최소개수를 구하는 함수
function countNum(arr) {
    let count = 0;
    // 구조분해 할당으로 사탕의 총 개수와 나머지 배열은 target으로 배정
    let [[n], ...target] = arr;
    // target의 요소들을 곱한뒤 새로운 배열로 반환
    target = target.map((item) => item.reduce((acc, curr) => acc * curr));
    // 내림차순 정렬
    target.sort((a,b) => b-a);
    for(let num of target) {
        // n이 0이거나 음수이면 for문 종료
        if(n <= 0) break;
        else {
            // n이 0보다 크면 count를 1 증가 시키며 n에서 num을 빼줌
            count += 1;
            n -= num;
        }
    }
    return count;
}

function solution(arr) {
    const answer = [];
    // 배열의 요소만큼 순회
    for(let x of arr) {
        const item = countNum(x);
        answer.push(item);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));