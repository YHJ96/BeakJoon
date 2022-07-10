const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
inputArray[0] = input[0].split(' ').map(Number);
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].split('');
    inputArray.push(inputValue);
}

function solution(arr) {
    const answer = [0, 0]
    const [[n,m], ...board] = arr;
    // 4방 탐색 초기화
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    // 깊이 우선 탐색 함수 생성
    function dfs(y, x, count) {
        // 카운팅
        if (board[y][x] === 'o') count.sheep++;
        if (board[y][x] === 'v') count.wolf++;
        // 방문 처리
        board[y][x] = '#';
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외처리
            if (ny < 0 || nx < 0 || ny >= n || nx >= m || board[ny][nx] === '#') continue;
            // 다음 좌표 실행
            dfs(ny, nx, count);
        }
    }
    // 모든 좌표를 완전탐색
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // 예외처리
            if (board[i][j] === '#') continue;
            // 가독성을 위해 객체를 사용
            const count = { sheep: 0, wolf: 0 };
            // 탐색 시작
            dfs(i, j, count);
            // 양이 많으면 늑대를 쫒아내고 아닐경우 양은 모두 잡아먹힘
            if (count.sheep > count.wolf) count.wolf = 0;
            else count.sheep = 0;
            // 양과 늑대의 수를 더해주기
            answer[0] += count.sheep;
            answer[1] += count.wolf;
        }
    }
    // 정답 정제
    return answer.join(' ');
}

console.log(solution(inputArray));