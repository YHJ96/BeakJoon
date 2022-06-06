const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const inputArray = [];

for (let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(" ").map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = [];
    let [cat, ...people] = arr;
    // 3가지의 숫자로 가능한 모든 순열의 자리수
    const position = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
    // 완전탐색 시작
    for(let i = 0; i < position.length; i++) {
        let start = [...cat];
        let sum = 0;
        for(let j = 0; j < position[i].length; j++) {
            // 좌표 사이의 거리를 구하는 공식을 이용
            const a1 = (start[0] - people[position[i][j]][0]) ** 2;
            const a2 = (start[1] - people[position[i][j]][1]) ** 2;
            const distance = Math.sqrt(a1 + a2);
            // 해당 좌표를 초기화
            start = people[position[i][j]];
            // 좌표의 거리만큼 sum에 누적
            sum += distance;
        }
        // answer에 push
        answer.push(sum);
    }
    // 최솟값 구하기
    answer = Math.min(...answer);
    // 정답 정제
    return parseInt(answer);
}

console.log(solution(inputArray));