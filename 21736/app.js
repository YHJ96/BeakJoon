const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split('');
    inputArray.push(inputValue);
}

function solution(board) {
    let answer = 0;
    const n = board.length;
    const m = board[0].length;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    // 깊이 우선 탐색 함수 생성
    function DFS(y, x) {
        // 만약 'P'를 만나면 answer += 1
        if(board[y][x] === 'P') answer += 1;
        // 해당 좌표 방문 처리
        board[y][x] = 'X';
        // 4방 탐색 시작
        for (let k = 0; k < 4; k++) {
            // 4방 탐색 다음 좌표
            const ny = y + dy[k];
            const nx = x + dx[k];
            // y와 x좌표가 보드를 벗어나지 않고 보드의 y와 x좌표의 값이 'O'과 'P'일경우 좌표를 넘겨줌
            if (0 <= ny && ny < n && 0 <= nx && nx < m && (board[ny][nx] === 'O' || board[ny][nx] === 'P')) {
                // 탐색 시작
                DFS(ny, nx);
            }
        }
    }
    // 2차원 보드 완전 탐색
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 보드의 y와 x좌표의 값이 'I'일 경우 실행
            if (board[i][j] === 'I') {
                // 깊이 우선 탐색 실행
                DFS(i, j);
            }
        }
    }
    // answer가 0이라면 "TT" 출력
    if(answer === 0) answer = "TT";
    return answer;
}

console.log(solution(inputArray));