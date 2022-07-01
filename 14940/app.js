const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let item of input) inputArray.push(item.split(' ').map(Number));

function solution(arr) {
    const [[n, m], ...borad] = arr;
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    const queue = [];
    // 좌표 완전탐색 시작
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // 해당 좌표의 값이 2면 시작점
            if (borad[i][j] === 2) queue.push([i, j]);
            // 방문처리를 위해 1과 0을 바꿔준다.
            else if (borad[i][j] === 1) borad[i][j] = 0;
            else {
                borad[i][j] = 1;
                // 결과값에 맞게 vistied만 0으로 바꿔준다.
                visited[i][j] = 0;
            }
        }
    }
    // 첫 요소 방문처리
    visited[queue[0][0]][queue[0][1]] = 0;
    // 너비 우선 탐색 시작
    while(queue.length) {
        const [y, x] = queue.shift();
        // 4방 탐색
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외처리
            if (ny >= 0 && nx >= 0 && ny < n && nx < m && borad[ny][nx] === 0) {
                // borad 방문처리
                borad[ny][nx] = borad[y][x] + 1;
                // 실제 출력할 visited 정제
                visited[ny][nx] = visited[y][x] + 1;
                queue.push([ny, nx]);
            }
        }
    }
    // 정답 정제
    const answer = visited.map((item) => item.join(' ')).join('\n');
    return answer;
}

console.log(solution(inputArray));