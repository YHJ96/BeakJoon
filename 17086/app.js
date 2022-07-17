const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index, arr) => {
    arr[index] = item.split(' ').map(Number);
});

function solution(arr) {
    let answer = 0;
    const [ [n, m], ...board ] = arr;
    // 8방 탐색 좌표 초기화
    const dy = [1, 1, 0, -1, -1, -1, 0, 1];
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const queue = [];
    // board를 탐색하면서 1인 값을 queue에 push
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (board[i][j] !== 1) continue;
            queue.push([i, j]);
        }
    }
    // 너비 우선 탐색 시작
    while(queue.length) {
        // 맨 첫 요소를 제거
        const [y, x] = queue.shift();
        for(let i = 0; i < 8; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외처리
            if (ny < 0 || nx < 0 || ny >= n || nx >= m || board[ny][nx] !== 0) continue;
            // 방문처리
            board[ny][nx] = board[y][x] + 1;
            // 다음 좌표 진행
            queue.push([ny, nx]);
        }
    }
    // 최대 거리 탐색 시작
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            answer = Math.max(answer, board[i][j]);
        }
    }
    // 방문처리를 1부터 시작함으로 거리는 -1 정답 정제
    return answer - 1;
}

console.log(solution(input));