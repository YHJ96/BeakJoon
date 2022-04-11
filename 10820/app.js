const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
    let answer = '';
    for (let i in input) {
        // 문제의 공백 예외처리
        if (input[i] === '') continue;
        let count = [0, 0, 0, 0];
        // 모든 요소를 나눈뒤 배열에 담는다.
        let char = input[i].split('');
        for (let j in char) {
            // a-z 찾기
            if (char[j] >= 'a' && char[j] <= 'z') count[0] += 1;
            // A-Z 찾기
            else if (char[j] >= 'A' && char[j] <= 'Z') count[1] += 1;
            // 0-9 찾기
            else if (char[j] >= '0' && char[j] <= '9') count[2] += 1;
            // space 찾기
            else if (char[j] === ' ') count[3] += 1;
        }
        // 정답 정제
        answer += count.join(" ") + "\n";
    }
    return answer;
}

console.log(solution(input));