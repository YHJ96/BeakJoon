const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = input[0].split(' ').map(Number);

// 시간 초과
function distance(t1, t2, board) {
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    const queue = [t1];
    board[t1[0]][t1[1]] = 1;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) if (board[i][j] === 'L') board[i][j] = 0;
    }
    while (queue.length) {
        const [y, x] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            if (ny < 0 || nx < 0 || ny >= board.length || nx >= board[0].length || board[ny][nx] !== 0) continue;
            board[ny][nx] = board[y][x] + 1;
            queue.push([ny, nx]);
        }
    }
    return board[t2[0]][t2[1]];
}

function solution(arr) {
    let answer = 0;
    const [[n, m], ...position] = arr;
    const section = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) if (position[i][j] === 'L') section.push([i, j]);
    }
    for (let i = 0; i < section.length - 1; i++) {
        for (let j = i + 1; j < section.length; j++) {
            const board = [];
            for (let k = 0; k < position.length; k++) board.push([...position[k]]);
            const length = distance(section[i], section[j], board);
            answer = Math.max(length, answer);
        }
    }
    return answer - 1;
}

console.log(solution(input));