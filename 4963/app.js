const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
let arrCnt = 0;
// 입력값 정제 마지막 입력값에 [0,0] 들어오기 때문에 length - 1
while (arrCnt !== input.length - 1) {
    const check = input[arrCnt].split(' ').map((item) => +item);
    const arr = [];
    // arrCnt가 배열의 col 개수이기 때문에 + 1 진행 하면서 더한값 까지 반복해서 arr 만들어줌
    for (let i = arrCnt + 1; i <= arrCnt + check[1]; i++) {
        const value = input[i].split(' ').map((item) => +item);
        arr.push(value);
    }
    inputArray.push(arr);
    // arrCnt 더해주기 숫자로 쓰였던 인자까지 더함
    arrCnt += check[1] + 1;
}

// 섬의 개수를 찾는 함수
function findLand(board) {
    let answer = 0;
    const dy = [1,1,0,-1,-1,-1,0,1];
    const dx = [0,1,1,1,0,-1,-1,-1];
    function DFS(y, x) {
        board[y][x] = 0;
        // 8방 탐색 시작
        for(let k = 0; k < dy.length; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            // 예외조건 확인
            if(ny >= 0 && nx >= 0 && ny < board.length && nx < board[0].length && board[ny][nx] !== 0) {
                DFS(ny, nx);
            }
        }
    }
    // 완전탐색 시작
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            // 섬을 만나면 DFS진행
            if(board[i][j] !== 0) {
                answer += 1;
                DFS(i , j);
            }
        }
    }
    return answer;
}

// 출력값 정제
function solution(arr) {
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        answer += findLand(arr[i]) + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));