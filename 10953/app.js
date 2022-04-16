const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
// 입력값 정제
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim();
    // ',' 기준으로 나눈뒤 number 타입으로 치환한다.
    inputArray.push(inputValue.split(',').map(Number));
}

function solution(arr) {
    let answer = '';
    for(let item of arr) {
        // 구조 분해 할당으로 a와 b를 나눈다.
        const [a, b] = item;
        // a와 b의 값을 더하고 줄을 바꿔 출력
        answer += (a + b) + "\n";
    }
    // 정답 정제
    return answer.trim();
}

console.log(solution(inputArray));