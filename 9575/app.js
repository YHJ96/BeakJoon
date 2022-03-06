const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const inputArray = [];
let ck = [];
for(let i = 0; i < input.length; i++) {
    if(i % 2 == 0 || i === 0) continue;
    const inputValue = input[i].trim().split(" ").map((item) => +item);
    if(ck.length === 2) {
        ck.push(inputValue);
        inputArray.push(ck);
        ck = [];
    } else ck.push(inputValue);
}

// 행운의 숫자가 몇개 있는지 찾는 함수
function findNum(arr) {
    let answer = 0;
    // 배열 3개를 구조분해할당으로 나눔
    const [a, b, c] = arr;
    // 중복된 숫자를 제거하기 위해 Set 함수 사용
    const filter = new Set();
    // 3개의 배열을 완전탐색
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            for(let k = 0; k < c.length; k++) {
                // 각 배열의 합
                const item = a[i] + b[j] + c[k];
                // 예외처리
                if(filter.has(item)) continue;
                filter.add(item);
            }
        }
    }
    // 모든 경우의 숫자의 요소만큼 순회
    filter.forEach((item) => {
        // 비교를 위해서 배열로 만듬
        const num = [...item.toString()];
        // 만약 모든 인자가 5나 8인 경우 true
        const ck = num.every((item) => {
            return item === '5' || item === '8';
        });
        if(ck) answer += 1;
    });
    return answer;
}

function solution(arr) {
    const answer = [];
    // 배열의 요소만큼 순회
    for(let x of arr) {
        const item = findNum(x);
        answer.push(item);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));