const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim().split("\n");

// f(n) = f(n-2) - f(n-1)의 귀납적 추론으로 재귀함수 탈출조건은 0,1일때 걸어준다.
function findNum(first, seconed, count) {
    if(count === 0) return first;
    if(count === 1) return seconed;
    return findNum(first, seconed, count - 2) - findNum(first, seconed ,count - 1);
}

function solution(n) {
    const answer = [];
    // 탐색시작 음수가 나오면 안되므로 n / 2 보다는 커야한다
    for(let i = parseInt(n / 2); i <= n; i++) {
        const total = [];
        let cnt = 0;
        // 재귀함수의 값이 음수일 떄 까지 반복
        while(findNum(n, i, cnt) >= 0) {
            total.push(findNum(n, i, cnt));
            cnt++;
        }
        // 배열의 길이와 요소들을 객체로 push
        answer.push({ targetLenght: total.length, target: total});
    }
    // 배열의 길이로 정렬
    answer.sort((a,b) => b.targetLenght-a.targetLenght);
    // 정답 정제
    return answer[0].targetLenght + "\n" + answer[0].target.join(" ");
}

console.log(solution(input));