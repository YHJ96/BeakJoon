const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

function solution(arr) {
    let boardCount = 0;
    let newBoardCount = 0;
    const board = [];
    const newBoard = [];
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    for(let i = 0; i < arr.length; i++) {
        const newBoardItem = arr[i].split('');
        const boardItem = arr[i].split('');
        for(let j = 0; j < arr[i].length; j++) {
            if(newBoardItem[j] === 'G') newBoardItem[j] = 'R';
        }
        newBoard.push(newBoardItem);
        board.push(boardItem);
    }
    function DFS(y, x, target, search) {
        search[y][x] = 0;
        for(let k = 0; k < dy.length; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            if(ny >= 0 && nx >= 0 && ny < arr.length && nx < arr[0].length && search[ny][nx] === target && search[ny][nx] !== 0) {
                DFS(ny, nx, target, search);
            }
        }
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] !== 0) {
                boardCount++;
                DFS(i, j, board[i][j], board);
            }
            if(newBoard[i][j] !== 0) {
                newBoardCount++
                DFS(i, j, newBoard[i][j], newBoard);
            }
        }
    }
    const answer = `${boardCount} ${newBoardCount}`;
    return answer;
}

console.log(solution(inputArray));