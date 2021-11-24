const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
let arrCnt = 0;
while (arrCnt !== input.length - 1) {
    const check = input[arrCnt].split(' ').map((item) => +item);
    const arr = [];
    for (let i = arrCnt + 1; i <= arrCnt + check[1]; i++) {
        const value = input[i].split(' ').map((item) => +item);
        arr.push(value);
    }
    inputArray.push(arr);
    arrCnt += check[1] + 1;
}

function findLand(board) {
    let answer = 0;
    const dy = [1,1,0,-1,-1,-1,0,1];
    const dx = [0,1,1,1,0,-1,-1,-1];
    function DFS(y, x) {
        board[y][x] = 0;
        for(let k = 0; k < dy.length; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            if(ny >= 0 && nx >= 0 && ny < board.length && nx < board[0].length && board[ny][nx] !== 0) {
                DFS(ny, nx);
            }
        }
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] !== 0) {
                answer += 1;
                DFS(i , j);
            }
        }
    }
    return answer;
}

function solution(arr) {
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        answer += findLand(arr[i]) + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));