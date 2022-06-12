const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = input[0].split(' ').map(Number);

function solution() {
    // 구조 분해 할당으로 변수 초기화
    const [ [n, k], arr ] = input;
    let answer = 0;
    const hamburger = [...arr];
    // 배열 요소만큼 전부 순회시작
    for(let i = 0; i < n; i++) {
        // 배열의 요소가 'P'일때 실행
        if (hamburger[i] !== 'P') continue;
        for(let j = i - k; j <= i + k; j++) {
            // j의 범위 예외처리와 배열의 요소에서 'H'를 찾으면 실행
            if(j >= 0 && j < n && hamburger[j] === 'H') {
                // 해당 배열의 요소를 'E'로 재할당
                hamburger[j] = 'E';
                // answer + 1
                answer += 1;
                // 찾으면 for문 정지
                break;
            }
        } 
    }
    return answer;
}

console.log(solution(input));