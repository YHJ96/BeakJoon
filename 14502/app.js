const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    const virus = [];
    const section = [];
    const [[n,m], ...board] = arr;
    // 완전 탐색으로 바이러스와 구역 좌표 모두 구하기
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (board[i][j] === 0) section.push([i, j]);
            if (board[i][j] === 2) virus.push([i, j]);
        }
    }
    // 구역에서 3가지를 뽑는 경우의 수 완전탐색 시작
    for(let i = 0; i < section.length - 2; i++) {
        for(let j = i + 1; j < section.length - 1; j++) {
            for(let k = j + 1; k < section.length; k++) {
                let count = 0;
                // 복사를 위해서 map과 queue 초기화
                const map = [];
                const queue = [];
                // 4방 탐색 좌표
                const dy = [1,0,-1,0];
                const dx = [0,1,0,-1];
                // 깊은 복사 시작
                for(let position of board) map.push(position.slice());
                for(let position of virus) queue.push(position.slice());
                // 좌표 구조 분해 할당
                const [y1, x1] = section[i];
                const [y2, x2] = section[j];
                const [y3, x3] = section[k];
                // 벽 세우기
                map[y1][x1] = 1;
                map[y2][x2] = 1;
                map[y3][x3] = 1;
                // 너비 우선 탐색 시작
                while(queue.length) {
                    const [y, x] = queue.shift();
                    // 방문 처리
                    map[y][x] = 2;
                    // 4방 탐색 시작
                    for(let i = 0; i < 4; i++) {
                        const ny = y + dy[i];
                        const nx = x + dx[i];
                        // 예외처리
                        if (ny < 0 || nx < 0 || ny >= n || nx >= m || map[ny][nx] !== 0) continue;
                        // 좌표 push
                        queue.push([ny, nx]);
                    }
                }
                // 안전구역 검색
                for(let i = 0; i < n; i++) {
                    for(let j = 0; j < m; j++) {
                        if (map[i][j] === 0) count += 1;
                    }
                }
                // 최대값 정제
                answer = Math.max(answer, count);
            }
        }
    }
    return answer;
}

console.table(solution(inputArray));