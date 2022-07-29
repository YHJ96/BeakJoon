const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = input[0].split(' ').map(Number);

// 너비 우선 탐색 함수 생성
function distance(start, n, m, position) {
    // 배열 초기화
    const board = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
    // 4방 탐색 좌표
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    // queue 초기화
    const queue = [start];
    board[start[0]][start[1]] = 1;
    // queue에 요소가 없을 때 까지 반복문 실행
    while (queue.length) {
        // queue의 맨 앞의 요소 추출
        const [y, x] = queue.shift();
        // 좌표 탐색 시작
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외 처리
            if (ny < 0 || nx < 0 || ny >= board.length || nx >= board[0].length || board[ny][nx] !== 0 || position[ny][nx] !== 'L') continue;
            // 방문 처리
            board[ny][nx] = board[y][x] + 1;
            // 다음 좌표 방문 시작
            queue.push([ny, nx]);
        }
    }
    // 제일 큰 수를 추출
    return Math.max(...board.flat());
}

function solution(arr) {
    let answer = 0;
    const [[n, m], ...position] = arr;
    // 모든 start 좌표만 완전 탐색 시작
    for (let i = 0; i < position.length; i++) {
        for (let j = 0; j < position[0].length; j++) {
            // 좌표가 L이 아니면 continue
            if (position[i][j] !== 'L') continue;
            // 시작점 부터 너비 우선 탐색 시작
            const count = distance([i, j], n, m, position);
            // 최대값 저장
            answer = Math.max(answer, count);
        }
    }
    // 정답 정제
    return answer - 1;
}

console.log(solution(input));