const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].split(' ').map((item) => +item));
}

function solution(board) {
    let count = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let check = 0;
    const n = board.length;
    const m = board[0].length;
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    let queue = [];
    // 좌표 완전탐색시작
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // 보드에서 1를 만났을 때
            if(board[i][j] === 1) {
                board[i][j] = 0;
                check++;
                count++;
                // 큐 초기화
                queue.push([i, j]);
                // BFS 실행
                while(queue.length) {
                    let [y,x] = queue.shift();
                    // 4방 탐색 시작
                    for(let k = 0; k < dy.length; k++) {
                        const ny = y + dy[k];
                        const nx = x + dx[k];
                        // 예외처리 좌표평면
                        if(ny >= 0 && nx >= 0 && ny < n && nx < m && board[ny][nx] === 1) {
                            check++;
                            board[ny][nx] = 0;
                            queue.push([ny, nx]);
                        }
                    }
                }
                // 거리의 최대값
                max = Math.max(max, check);
                check = 0;
            }
        }
    }
    // 조건 예외처리
    if(count === 0) return 0 + '\n' + 0;
    const answer = count + '\n' + max
    return answer;
}

// DFS코드 메모리초과 최단거리가 아니고 탐색인데 메모리초과 뜨는 이유는 JS 메모리 받는 문제인지 모르겠음.
// function solution(board) {
//     let count = 0;
//     let max = Number.MIN_SAFE_INTEGER;
//     let check = 0;
//     const n = board.length;
//     const m = board[0].length;
//     const dy = [1,0,-1,0];
//     const dx = [0,1,0,-1];
//     function DFS(y, x) {
//         board[y][x] = 0;
//         check += 1;
//         for(let k = 0; k < dy.length; k++) {
//             const ny = y + dy[k];
//             const nx = x + dx[k];
//             if(ny >= 0 && nx >= 00 && ny < n && nx < m && board[ny][nx] === 1) {
//                 DFS(ny, nx);
//             }
//         }
//     }
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < m; j++) {
//             if(board[i][j] === 1) {
//                 count += 1;
//                 DFS(i , j);
//                 max = Math.max(check, max);
//                 check = 0;
//             }
//         }
//     }
//     const answer = count + '\n' + max;
//     if(count === 0) return 0 + '\n' + 0;
//     return answer;
// }

console.log(solution(inputArray));