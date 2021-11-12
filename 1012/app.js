const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = Array.from({length : +input[0]}, () => []);
for (let i = 1, j = -1; i < input.length; i++) {
    const item = input[i].split(' ').map((item) => +item);
    if(item.length === 3) j++;
    inputArray[j].push(item);
}

function searchWarm(arr) {
    let answer = 0;
    let col = arr[0][1];
    let row = arr[0][0];
    // 2차원 배열 초기화
    let board = Array.from(Array(col), () => Array(row).fill(0));
    for (let i = 1; i < arr.length; i++) {
        // 좌표 채우기
        const [x, y] = arr[i];
        board[y][x] = 1;
    }
    // 4방탐색
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    function DFS(y, x) {
        for (let k = 0; k < dy.length; k++) {
            // 4방 탐색 하면서 조건에 맞는 수를 0으로 바꾸기
            const ny = y + dy[k];
            const nx = x + dx[k];
            if (ny >= 0 && nx >= 0 && ny < col && nx < row && board[ny][nx] === 1) {
                board[ny][nx] = 0;
                // dfs 호출
                DFS(ny, nx);
            }
        }
    }
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            // 좌표를 찾으면 dfs시작
            if (board[i][j] === 1) {
                answer++;
                DFS(i, j);
            }
        }
    }
    return answer;
}

function solution(arr) {
    let answer = '';
    // 정답 정제
    for(let i = 0; i < arr.length; i++) {
        const item = searchWarm(arr[i]);
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));