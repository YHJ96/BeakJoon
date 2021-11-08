const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split('').map((item) => +item);
    inputArray.push(inputValue);
}

// DFS 시간초과
// function solution(board) {
//     const n = board.length;
//     const m = board[0].length;
//     const dy = [1,0,-1,0];
//     const dx = [0,1,0,-1];
//     let answer = Number.MAX_SAFE_INTEGER;
//     let path = [[0,0]];
//     board[0][0] = 0;
//     function DFS(y,x) {
//         if(y === n-1 && x === m-1) {
//             answer = Math.min(answer, path.length);
//         } else {
//             for(let i = 0; i < 4; i++) {
//                 const ny = y + dy[i];
//                 const nx = x + dx[i];
//                 if(ny >= 0 && nx >= 0 && ny < n && nx < m && board[ny][nx] === 1) {
//                     board[ny][nx] = 0;
//                     path.push([ny,nx]);
//                     DFS(ny,nx);
//                     board[ny][nx] = 1;
//                     path.pop([ny,nx]);
//                 }
//             }
//         }
//     }
//     DFS(0,0);
//     return answer;
// }

function solution(board) {
    let answer;
    const n = board.length;
    const m = board[0].length;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    const queue = [[0,0,0]];
    while(queue.length) {
        const [y, x, path] = queue.shift();
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            if(ny >= 0 && nx >= 0 && ny < n && nx < m && board[ny][nx] === 1) {
                board[ny][nx] = path + 2;
                queue.push([ny, nx, path + 1]);
            }
        }
    }
    answer = board[n-1][m-1];
    return answer;
}

console.log(solution(inputArray));