const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

// 백트래킹 말고 완탐으로 해보기
function solution(arr) {
    let answer = 0;
    const [[n,m], ...board] = arr;
    function dfs(l) {
        if (l === 3) {
            let count = 0;
            const newBoard = [];
            for(let item of board) newBoard.push(item.slice());
            const dy = [1,0,-1,0];
            const dx = [0,1,0,-1];
            const queue = [];
            for(let i = 0; i < n; i++) {
                for(let j = 0; j < m; j++) {
                    if (newBoard[i][j] === 2) queue.push([i, j]);
                }
            }
            while(queue.length) {
                const [y, x] = queue.shift();   
                newBoard[y][x] = 2;
                for(let i = 0; i < 4; i++) {
                    const ny = y + dy[i];
                    const nx = x + dx[i];
                    if(ny < 0 || nx < 0 || ny >= n || nx >= m || newBoard[ny][nx] !== 0) continue;
                    queue.push([ny, nx]);
                }
            }
            for(let i = 0; i < n; i++) {
                for(let j = 0; j < m; j++) {
                    if (newBoard[i][j] === 0) count += 1;
                }
            }
            answer = Math.max(count, answer);
        } else {
            for(let i = 0; i < n; i++) {
                for(let j = 0; j < m; j++) {
                    if (board[i][j] === 0) {
                        board[i][j] = 1;
                        dfs(l+1);
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    dfs(0);
    return answer;
}

console.table(solution(inputArray));