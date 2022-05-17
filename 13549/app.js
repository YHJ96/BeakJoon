const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
    let answer = 0;
    const [start, target] = arr;
    // 방문 처리
    const visited = Array.from({ length: 100000 }, () => false);
    const queue = [];
    // queue 초기화
    queue.push([start, 0]);
    // 방문처리 초기화
    visited[start] = true;
    // 너비우선탐색 시작
    while (queue.length) {
        const [current, depth] = queue.shift();
        // 해당 타겟을 찾으면 반복문 종료
        if (current === target) {
            answer = depth;
            break;
        }
        // 해당 좌표 순서대로 시작
        for (let next of [current * 2, current - 1, current + 1]) {
            // 예외 처리
            if (!visited[next] && next >= 0 && next <= 100000) {
                // 방문 처리
                visited[next] = true;
                // 우선 순위
                if (next === current * 2 && next !== 0) queue.unshift([next, depth]);
                // depth 계산
                else queue.push([next, depth + 1]);
            }
        }
    }
    return answer;
}

console.log(solution(input));