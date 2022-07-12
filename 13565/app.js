const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = input[0].split(' ').map(Number);
for(let i = 1; i < input.length; i++) input[i] = input[i].split('').map((Number));

function solutiion(arr) {
    const [[n, m], ...board] = arr;
    // 4방 탐색 초기화
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    // 깊이 우선 탐색 함수 생성
    function dfs(y, x) {
        // 방문 처리
        board[y][x] = 2;
        // 4방 탐색 시작
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외 처리
            if (ny < 0 || nx < 0 || ny >= n || nx >= m || board[ny][nx] !== 0) continue;
            // 다음 좌표 방문
            dfs(ny, nx);
        }
    }
    // 배열의 첫 번째 요소들에 모두 방문
    for(let i = 0; i < m; i++) dfs(0, i);
    // 배열의 마지막 요소의 요소들이 하나라도 2라면 전기가 통함으로 true
    const checked = board[board.length - 1].some((item) => item === 2);
    // 정답 정제
    if(!checked) return "NO";
    else return "YES"
}   

console.log(solutiion(input));