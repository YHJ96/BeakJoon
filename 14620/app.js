const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const inputArray = [];
for (let i = 0; i < input.length; i++) {
    const item = input[i].trim().split(" ").map((item) => +item);
    inputArray.push(item);
}

function search(board) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] > 1) return false;
        }
    }
    return true;
}

function find(y, x, board) {
    const dy = [1, 0, 0, -1, 0];
    const dx = [0, 1, 0, 0, -1];
    for(let i = 0; i < 5; i++) {
        const ny = dy[i] + y;
        const nx = dx[i] + x;
        board[ny][nx] += 1;
    }
}

function solution(n, arr) {
    const dy = [1, 0, 0, -1, 0];
    const dx = [0, 1, 0, 0, -1];
    const sum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let ck = false;
            let add = 0;
            for (let k = 0; k < 5; k++) {
                const ny = dy[k] + i;
                const nx = dx[k] + j;
                if (ny < 0 || ny >= n || nx < 0 || nx >= n) {
                    ck = true;
                    break;
                } else add += arr[ny][nx];
            }
            if(ck) continue;
            else sum.push({ add: add, y: i, x: j });
        }
    }
    sum.sort((a,b) => a.add - b.add);
    for(let i = 0; i < sum.length - 2; i++) {
        for(let j = i + 1; j < sum.length - 1; j++) {
            for(let k = j + 1; k < sum.length; k++) {
                const board = Array.from({length: n}, () => Array.from({length: n}, () => 0));
                find(sum[i].y, sum[i].x, board);
                find(sum[j].y, sum[j].x, board);
                find(sum[k].y, sum[k].x, board);
                const ck = search(board);
                if(ck) return sum[i].add + sum[j].add + sum[k].add;
            }
        }
    }
}

console.log(solution(n, inputArray));