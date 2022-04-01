const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(" ").map((item) => +item);

function solution(arr) {
    const answer = [];
    const [a, b] = arr;
    // a, b 중 큰 값을 구한다.
    const max = Math.max(a, b);
    const num = [];
    // 1 ~ max 까지 공통의 약수를 구한다.
    for(let i = 1; i <= max; i++) {
        if(a % i === 0 && b % i === 0) num.push(i);
    }
    // 모든 요소들을 순회하면서 요소들을 a, b를 나눠준다.
    num.forEach((item) => {
        const divideA = a / item;
        const divideB = b / item;
        // answer에 push
        answer.push([item, divideA, divideB]);
    });
    // 정답 정제
    return answer.join("\n").replaceAll(',', " ");
}

console.log(solution(input));