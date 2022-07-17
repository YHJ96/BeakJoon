const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let i = 0; i < input.length; i += 3) {
    const n = +input[i];
    const position1 = input[i + 1].split(' ').map(Number);
    const position2 = input[i + 2].split(' ').map(Number);
    inputArray.push([n, position1, position2]);
}

function minMove(n, start, target) {
    // n * n 보드 초기화
    const board = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    // 나이트가 이동할 수 있는 8가지 방향 좌표 초기화
    const dy = [2, 1, -1, -2, -2, -1, 1, 2];
    const dx = [1, 2, 2, 1, -1, -2, -2, -1];
    // queue 초기화
    const queue = [start];
    // 방문 처리
    board[start[0]][start[1]] = 1;
    // queue에 요소가 없을 떄 까지 진행
    while(queue.length) {
        // 맨 앞의 좌표를 가져오기
        const [y, x] = queue.shift();
        // 8방 탐색 시작
        for(let i = 0; i < 8; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외처리
            if (ny < 0 || nx < 0 || ny >= n || nx >= n || board[ny][nx] !== 0) continue;
            // 방문처리
            board[ny][nx] = board[y][x] + 1;
            // 다음 좌표 진행
            queue.push([ny, nx]);
        }
    }
    // 정답 정제 (거리가 1부터 시작함으로 1를 빼준다.)
    return board[target[0]][target[1]] - 1;
}

function solution(arr) {
    const answer = [];
    // arr 요소 만큼 순회시작
    for(let item of arr) {
        // 구조 분해 할당으로 변수 초기화
        const [n, start, target] = item;
        // target으로 가는 최단거리를 구하는 변수
        const count = minMove(n, start, target);
        // answer에 push
        answer.push(count);
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));