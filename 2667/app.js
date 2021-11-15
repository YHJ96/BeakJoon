const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    const inputValue = input[i].split('').map((item) => +item);
    inputArray.push(inputValue);
}

function solution(board) {
    let answer = '';
    let home = [];
    let count = 0;
    const n = board.length;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];

    function DFS(y, x) {
        board[y][x] = 0;
        count++;
        for (let k = 0; k < dy.length; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            if (ny >= 0 && nx >= 0 && ny < n && nx < n && board[ny][nx] === 1) {
                DFS(ny, nx);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                DFS(i, j);
                home.push(count);
                count = 0;
            }
        }
    }

    home.sort((a, b) => a - b);
    home.unshift(home.length);
    for (let x of home) {
        answer += x + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));