const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].trim().split(" ").map((item) => +item);
    inputArray.push(inputValue);
}

function solution(arr) {
    // 구조분해할당으로 나누기
    const [n, num] = arr;
    const answer = [];
    // n[1] - 1 을 num의 전체 길이에서 빼주는 조건식으로 실행한다. 안그러면 완전탐색을 돌릴때 범위를 벗어 나기 때문이다.
    for(let i = 0; i < num.length - (n[1] - 1); i++) {
        let add = 0;
        // n 만큼의 합을 구하기 위해서 i + n[1]을 해서 탐색하고 add에 합을 더한다.
        for(let j = i; j < i + n[1]; j++) add += num[j];
        // answer에 add를 push
        answer.push(add);
    }
    // 정답 정제
    return Math.max(...answer);
}

console.log(solution(inputArray));