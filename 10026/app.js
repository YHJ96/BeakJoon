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
    // arr를 일반 board와 적록색맹 board로 나누기
    for(let i = 0; i < arr.length; i++) {
        const newBoardItem = arr[i].split('');
        const boardItem = arr[i].split('');
        for(let j = 0; j < arr[i].length; j++) {
            // 적록색맹은 초록색은 빨간색으로 바꿔주기
            if(newBoardItem[j] === 'G') newBoardItem[j] = 'R';
        }
        newBoard.push(newBoardItem);
        board.push(boardItem);
    }
    // DFS 함수 생성
    function DFS(y, x, target, search) {
        // 순회하면서 배열의 인자값을 0으로 체크
        search[y][x] = 0;
        // 4방 탐색 시작
        for(let k = 0; k < dy.length; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            // 조건확인 찾는 배열의 타겟이 아니거나 배열을 벗어났을 경우와 인자가 0인경우 정지
            if(ny >= 0 && nx >= 0 && ny < arr.length && nx < arr[0].length && search[ny][nx] === target && search[ny][nx] !== 0) {
                DFS(ny, nx, target, search);
            }
        }
    }
    // 완전탐색 적록색맹 보드와 일반 보드 탐색시작
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
    // 정답정제
    const answer = `${boardCount} ${newBoardCount}`;
    return answer;
}

console.log(solution(inputArray));