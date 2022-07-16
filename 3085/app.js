const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = +input[0];

function count(board) {
    let result = 0;
    const n = board.length;
    const m = board[0].length;

    for(let i = 0; i < n; i++) {
        let num = 1;
        for(let j = 0; j < m - 1; j++) {
            if (board[i][j] === board[i][j + 1]) num += 1;
            else num = 1;
        }
        result = Math.max(result, num);
    }

    for(let i = 0; i < m; i++) {
        let num = 1;
        for(let j = 0; j < n - 1; j++) {
            if (board[j][i] === board[j+1][i]) num += 1;
            else num = 1;
        }
        result = Math.max(result, num);
    }
    return result;
}

function solution(arr) {
    let answer = 0;
    const dy = [1, 0, -1 ,0];
    const dx = [0, 1, 0, -1];
    const [n, ...items] = arr;
    const m = items[0].length;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            for(let i = 0; i < 4; i++) {
                const board = [];
                for(let item of items) board.push([...item]);
                const ny = i + dy[i];
                const nx = j + dx[i];
                if (ny < 0 || nx < 0 || ny >= n || nx >= m ) continue;
                const tmp = board[ny][nx];
                board[ny][nx] = board[i][j];
                board[i][j] = tmp;
                answer = Math.max(answer, count(board));
            }
        }
    }
    return answer;
}

console.log(solution(input));