const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    const n = arr.length;
    const m = arr[0].length;
    // 인접한 물 변수 초기화
    const temp = Array.from(Array(n), () => Array(m).fill(0));
    // 방문처리
    let visited = Array.from(Array(n), () => Array(m).fill(0));
    // 4방 탐색 기본값
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    // 깊이 우선 탐색 실행
    function DFS(y, x) {
        // 방문한 곳을 1로 처리
        visited[y][x] = 1;
        // 4방 탐색 시작
        for (let k = 0; k < 4; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            // 빙산의 2차원 좌표를 넘지 않은 좌표만 대입
            if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
                // 방문을 하지 않은 곳이며 빙산이 물 상태가 아닐 때
                if (visited[ny][nx] === 0 && arr[ny][nx] > 0) {
                    DFS(ny, nx);
                }
            }
        }
    }

    // 빙산의 덩어리를 세는 함수
    function cntCluster() {
        let cluster = 0;
        // 2차원 배열 완전탐색 시작
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // 방문을 안했거나 빙산이 물이 아닌경우
                if (visited[i][j] === 0 && arr[i][j] > 0) {
                    // cluster를 +1를 먼저 해주고 DFS실행 방문처리
                    ++cluster;
                    DFS(i, j)
                }
            }
        }
        //  총 빙산의 개수를 넘겨줌
        return cluster;
    }

    // 내년의 빙산을 녹일 함수
    function nextYear(y, x) {
        let cnt = 0;
        for (let k = 0; k < 4; k++) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            // 빙산 좌표평면 예외처리
            if (0 <= ny && ny < n && 0 <= nx && nx < m) {
                // 다음 좌표가 0보다 작고 원래 좌표가 0보다 크다면 현재 시점 인접한 물
                if (arr[ny][nx] <= 0 && arr[y][x] > 0) {
                    // cnt 증가
                    ++cnt
                }
            }
        }
        // 총 인접한 물의 개수를 넘겨줌
        return cnt;
    }

    // 빙산의 개수를 찾는 변수 초기화
    let tmp = 0;
    // 빙산의 개수가 2이상일 경우 반복문 정지
    while ((tmp = cntCluster()) < 2) {
        // 처음의 값이 이미 빙산이 2개이상일 경우의 예외처리
        if (tmp === 0) {
            answer = 0;
            break;
        }
        // answer에 + 1
        ++answer;
        // 방문처리 초기화 함수
        visited = Array.from(Array(n), () => Array(m).fill(0));

        // 완전탐색 시작 내년의 인접한 물의 개수를 temp에 담기
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (arr[i][j] > 0) {
                    temp[i][j] = nextYear(i, j);
                }
            }
        }

        // 완전탐색 시작 내년의 인접한 물의 개수를 빙산에서 빼주기
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                arr[i][j] -= temp[i][j];
            }
        }
    }
    return answer;
}

console.log(solution(inputArray));