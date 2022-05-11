const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
    // 중복제거를 위한 자료구조 Set
    const answer = new Set();
    const board = arr.map((item) => item.split(" ").map(Number));
    // 4방 탐색 좌표
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    // 깊이 우선 탐색 함수 생성
    function DFS(L, y, x, sum) {
        // 길이가 5일 경우 출력
        if(L === 5) {
            answer.add(sum);
        } else {
            // 4방향 탐색 시작
            for(let i = 0; i < 4; i++) {
                let ny = y + dy[i];
                let nx = x + dx[i];
                // 좌표 예외처리
                if(ny >= 0 && ny < 5 && nx >= 0 && nx < 5) {
                    // 지나간 좌표 저장
                    const item = sum + board[ny][nx];
                    // 탐색 실행
                    DFS(L+1, ny, nx, item);
                }
            }
        }
    }
    // board의 모든 좌표를 방문
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            // 깊이 우선 탐색 실행
            DFS(0, i, j, `${board[i][j]}`);
        }
    }
    return answer.size;
}

console.log(solution(input));