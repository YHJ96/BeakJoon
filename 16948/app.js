const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index) => input[index] = item.split(' ').map(Number));

function solution(arr) {
    const [[n], [r1,c1,r2,c2]] = arr;
    // 나이트가 갈 수 있는 6방향 좌표
    const dy = [-2, -2, 0, 0, 2, 2];
    const dx = [-1, 1, -2, 2, -1, 1];
    // n * n 보드 초기화
    const board = Array.from({ length: n }, () => Array.from({ length: n }, () => -1));
    // queue 초기화
    const queue = [[r1, c1]];
    // 방문처리
    board[r1][c1] = 0;
    // queue가 비워질 때 까지 실행
    while(queue.length) {
        const [y, x] = queue.shift();
        // 좌표 탐색 시작
        for(let i = 0; i < 6; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외처리
            if (ny < 0 || nx < 0 || ny >= n || nx >= n || board[ny][nx] !== -1) continue;
            // detph + 1
            board[ny][nx] = board[y][x] + 1;
            // queue에 push
            queue.push([ny, nx]);
        }
    }
    // 정답 정제
    return board[r2][c2];
}

console.log(solution(input));