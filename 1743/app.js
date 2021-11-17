const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
const inputNum = input[0].trim().split(' ').map((item) => +item);
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim().split(' ').map((item) => +item));
}

function solution(n, arr) {
    let answer = [];
    let count = 0;
    let col = n[0];
    let row = n[1];
    let dy = [1,0,-1,0];
    let dx = [0,1,0,-1];
    // 2차원 배열을 초기화
    const board = Array.from(Array(col), () => Array(row).fill('.'));
    for(let i = 0; i < arr.length; i++) {
        // 좌표에 # 넣어주기
        const [y, x] = arr[i];
        board[y - 1][x - 1] = '#';
    }
    // DFS
    function DFS(y, x) {
        // 해당값을 .로 바꾸기
        board[y][x] = '.';
        // count 갯수 1 증가
        count++;
        // 4방 탐색 시작
        for(let k =0; k < dy.length; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            // 4방 탐색 조건
            if(ny >= 0 && nx >= 0 && ny < col && nx < row && board[ny][nx] === '#') {
                DFS(ny, nx);
            }
        }
    }

    for(let i = 0; i < col; i++) {
        for(let j = 0; j < row; j++) {
            // #을 찾으면 DFS시작
            if(board[i][j] === '#') {
                DFS(i, j);
                answer.push(count);
                count = 0;
            }
        }
    }
    return Math.max(...answer);
}

console.log(solution(inputNum, inputArray));