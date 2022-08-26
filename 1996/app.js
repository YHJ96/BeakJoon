const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = +input[0];
const inputArray = [];
for (let i = 1; i < input.length; i++) inputArray.push([...input[i]]);

// 미해결 입력값 문제 ?!
function solution(n, board) {
    const pos = [];
    const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === '.') continue;
            pos.push({ y: i, x: j, num: +board[i][j] });
        }
    }
    for (const item of pos) {
        const { y, x, num } = item;
        board[y][x] = '*';
        for (let i = 0; i < 8; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
            if (board[ny][nx] === '.') board[ny][nx] = num;
            else board[ny][nx] += num;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === '.') board[i][j] = 0;
            if (board[i][j] >= 10) board[i][j] = 'M';
        }
    }
    return board.map((item) => item.join("")).join('\n');
}

console.log(solution(input[0], inputArray));