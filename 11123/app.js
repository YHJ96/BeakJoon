const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let total = +input.shift();
let i = 0;
const inputArray = [];
while (total !== 0) {
    total -= 1;
    const inputValue = [];
    const [n, m] = input[i++].split(' ').map(Number);
    const range = i + n;
    for (i; i < range; i++) inputValue.push(input[i]);
    inputArray.push(inputValue);
}
// 양의 그룹의 개수를 세는 함수 생성
function countSheep(arr) {
    let count = 0;
    const board = [];
    // 4방 탐색 좌표 초기화
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    // 각각의 요소를 순회하면서 문자열을 배열로 치환
    for (let item of arr) board.push([...item]);
    const n = board.length;
    const m = board[0].length;
    // 깊이 우선 탐색 함수 생성
    function dfs(y, x) {
        // 방문 처리
        board[y][x] = '.';
        // 4방 탐색 시작
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외 처리
            if (ny < 0 || nx < 0 || ny >= n || nx >= m || board[ny][nx] === '.') continue;
            // 다음 좌표 방문
            dfs(ny, nx);
        }
    }
    // 완전 탐색 시작
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 예외 처리
            if (board[i][j] === '.') continue;
            // count + 1
            count += 1;
            // 깊이 우선 탐색 시작
            dfs(i, j);
        }
    }
    return count;
}

function solution(arr) {
    const answer = [];
    // arr의 요소만큼 반복문 실행
    for (let x of arr) {
        const item = countSheep(x);
        answer.push(item);
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));