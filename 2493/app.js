const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// TypeError 처리 (input에 빈 문자열이 포함되어 있는것 같음)
input = input[1].trim().split(" ").map(Number);

function solution(arr) {
    let answer = [];
    const stack = [];
    // stack에 예외처리
    stack.push([Number.MAX_SAFE_INTEGER, 0]);
    for (let i = 0; i < arr.length; i++) {
        const height = arr[i];
        // 탑의 길이가 스택에 있는 탑의 길이보다 크면 해당 요소 제거 반복
        while (stack[stack.length - 1][0] < height) stack.pop();
        // 작은 탑의 길이를 전부 제거한 뒤 스택의 마지막 타워 인덱스 확인
        answer.push(stack[stack.length - 1][1]);
        // 스택에 요소 넣기 탑이 1번 부터 시작함으로 i + 1
        stack.push([height, i + 1]);
    }
    // 정답 정제
    return answer.join(" ");
}

console.log(solution(input));