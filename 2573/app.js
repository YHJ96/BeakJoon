const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

// 메모리초과
function meltIce (arr) {
    const col = arr.length;
    const row = arr[0].length;
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    const iceHash = new Map();
    for(let i = 0; i < col; i++) {
        for(let j = 0; j < row; j++) {
            let cnt = 0;
            if(arr[i][j] !== 0) {
                for(let k = 0; k < dy.length; k++) {
                    const ny = i + dy[k];
                    const nx = j + dx[k];
                    if(ny >= 0 && nx >= 0 && ny < col && nx < row && arr[ny][nx] === 0) cnt += 1;
                }
            }
            if(cnt !== 0) iceHash.set([i, j], cnt);
        }
    }
    iceHash.forEach((item, index) => {
        const [y , x] = index;
        const sum = arr[y][x] - item;
        if(sum <= 0) {
            arr[y][x] = 0;
            return;
        }
        arr[y][x] = sum;
    });
    return arr;
}

function findIce(arr) {
    let answer = 0;
    const col = arr.length;
    const row = arr[0].length;
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    function DFS(y, x) {
        arr[y][x] = 0;
        for(let k = 0; k < dy.length; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            if(ny >= 0 && nx >= 0 && ny < col && nx < row && arr[ny][nx] !== 0) DFS(ny, nx);
        }
    }
    for(let i = 0; i < col; i++) {
        for(let j = 0; j < row; j++) {
            if(arr[i][j] !== 0) {
                answer += 1;
                DFS(i, j);
            }
        }
    }
    return answer;
}

function solution(board) {
    let answer = 0;
    while(true) {
        answer += 1;
        board = meltIce(board);
        const copyBoard = board.map((item) => [...item]);
        const count = findIce(copyBoard);
        if(count >= 2) break;
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] !== 0) break;
            }
        }
    }
    return answer;
}

console.table(solution(inputArray));