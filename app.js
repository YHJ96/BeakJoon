const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

function findAir(board) {
    const Axis = [];
    const n = board.length;
    const m = board[0].length;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let count = 0;
            if (board[i][j] === 1) {
                for (let k = 0; k < 4; k++) {
                    const ni = i + dy[k];
                    const nj = j + dx[k];
                    if (0 <= ni && ni < n && 0 <= nj && nj < m && board[ni][nj] === 2) count += 1;
                }
            }
            if (count >= 2) {
                Axis.push([i, j]);
            }
        }
    }
    return Axis;
}

function findCheese(board) {
    const n = board.length;
    const m = board[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 1) return true;
        }
    }
    return false;
}

function meltCheese(Axis, board) {
    for (let item of Axis) {
        const [y, x] = item;
        board[y][x] = 2;
    }
}

function solution(board) {
    let answer = 0;
    const n = board.length;
    const m = board[0].length;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    function DFS(y, x, bool) {
        if (bool) {
            if (board[y][x] == 0) return;
            board[y][x] = 0;
            for (let k = 0; k < 4; k++) {
                const ny = y + dy[k];
                const nx = x + dx[k];
                if (0 <= ny && ny < n && 0 <= nx && nx < m && board[ny][nx] === 2) {
                    DFS(ny, nx, bool);
                }
            }
        } else {
            if (board[y][x] == 2) return;
            board[y][x] = 2;
            for (let k = 0; k < 4; k++) {
                const ny = y + dy[k];
                const nx = x + dx[k];
                if (0 <= ny && ny < n && 0 <= nx && nx < m && board[ny][nx] === 0) {
                    DFS(ny, nx, bool);
                }
            }
        }
    }
    while(findCheese(board)) {
        answer++;
        DFS(0,0,false);
        meltCheese(findAir(board), board);
        DFS(0,0,true);
    }
    return answer;
}

console.table(solution(inputArray));
