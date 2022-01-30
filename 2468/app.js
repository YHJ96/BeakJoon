const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const board = [];
for(let i = 1; i < input.length; i++) {
    const item = input[i].trim().split(' ').map((item) => +item);
    board.push(item);
}

// 비에 따라서 땅이 몇개인지 찾는 함수생성
function serachLand(rain, board) {
    let answer = 0;
    // 4방 탐색을 위한 좌표
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    // board를 완전탐색하면서 rain보다 작은수를 0으로 만들어서 물에 잠긴걸 표현
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] < rain) board[i][j] = 0;
        }
    }
    // 깊이 우선탐색 시작 함수
    function dfs(y, x) {
        // 좌표가 이미 바다일경우 dfs정지
        if(board[y][x] === 0) return;
        // 들어온 땅 좌표를 바다로 바꿈
        board[y][x] = 0;
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 좌표 예외처리
            if(ny < 0 || nx < 0 || ny >= board.length || nx >= board[0].length || board[ny][nx] === 0) continue;
            // 들어온 땅 좌표에서 물이 아닌경우 dfs를 실행하면서 물로 바꿔줌
            dfs(ny, nx);
        }
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            // 좌표상 물이 아닌 지역일 경우 땅을 찾은것으로 answer를 +1해주고 dfs실행
            if(board[i][j] !== 0) {
                answer += 1;
                dfs(i, j);
            }
        }
    }
    return answer;
}

// 2차원 보드 복사 함수
function createCopyBoard(board) {
    const copyBoard = [];
    board.forEach((item) => copyBoard.push([...item]));
    return copyBoard;
}

function solution(board) {
    let answer = [];
    // 최대 땅의 높이가 100이므로 1~100까지 실행
    for(let i = 1; i <= 100; i++) {
        // 물의 양과 복사된 보드로 값 출력
        const item = serachLand(i, createCopyBoard(board));
        answer.push(item);
    }
    // 땅이 제일 많은경우 출력 (정답 정제)
    return Math.max(...answer);
}

console.table(solution(board));