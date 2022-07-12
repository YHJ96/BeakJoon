const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = input[0].split(' ').map(Number);
for(let i = 1; i < input.length; i++) {
    input[i] = input[i].split(' ').map(Number);
}

function solution(arr) {
    let answer = 0;
    const [[n,m], ...board] = arr;
    // 8방 탐색 좌표 초기화
    const dy = [1,1,0,-1,-1,-1,0,1];
    const dx = [0,1,1,1,0,-1,-1,-1];
    // 깊이 우선 탐색 함수 생성
    function dfs(y, x) {
        // 방문 처리
        board[y][x] = 0;
        // 8방 탐색 시작
        for(let i = 0; i < 8; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외처리
            if (ny < 0 || nx < 0 || ny >= n || nx >= m || board[ny][nx] === 0) continue;
            // 다음 좌표 실행
            dfs(ny, nx);
        }
    }
    // board 완전 탐색 시작
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // 좌표에서 1를 만나면 실행
            if (board[i][j] === 1) {
                // answer + 1
                answer += 1;
                // 깊이 우선 탐색 시작
                dfs(i, j);
            }
        }
    }
    return answer;
}

console.table(solution(input));