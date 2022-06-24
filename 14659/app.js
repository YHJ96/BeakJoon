const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[1].split(' ').map(Number);

function solution(arr) {
    let answer = 0;
    // 배열의 요소만큼 순회시작
    for(let i = 0; i < arr.length - 1; i++) {
        let count = 0;
        // 현재의 i + 1 요소부터 순회시작
        for(let j = i + 1; j < arr.length; j++) {
            // j가 i보다 크다면 정지
            if (arr[i] < arr[j]) break;
            // j가 i보다 작거나 같다면 conut + 1
            else count++;
        }
        // count와 현재 answer의 값을 비교하고 큰 수로 교체
        answer = Math.max(answer, count);
    }
    return answer;
}

console.log(solution(input));