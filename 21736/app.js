const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split('');
    inputArray.push(inputValue);
}

// 스택 오버플로우
function solution(board) {
    let answer = 0;
    const n = board.length;
    const m = board[0].length;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    function DFS(y, x) {
        board[y][x] = 'X';
        for (let k = 0; k < 4; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            if (0 <= ny && ny < n && 0 <= nx && nx < m && (board[ny][nx] === 'O' || board[ny][nx] === 'P')) {
                if (board[ny][nx] === 'P') answer++;
                DFS(ny, nx);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'I') {
                DFS(i, j);
                return answer;
            }
        }
    }
}

console.table(solution(inputArray));