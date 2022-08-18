const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(arr) {
    let answer = 0;
    const [n, ...board] = arr;
    const graph = [];
    // 완전 탐색 시작
    for (let i = 0; i < board.length; i++) {
        const item = [];
        for (let j = 0; j < board[i].length; j++) {
            // item에 경로 push
            if (board[i][j] === "Y") item.push(j);
        }
        // graph 등록
        graph.push(item);
    }
    // 각각의 요소만큼 반복문 수행
    for (let i = 0; i < n; i++) {
        // 방문 처리 변수 초기화
        const visited = Array.from({ length: n }, () => 0);
        const queue = [i];
        let count = 0;
        visited[i] = 1;
        // 깊이 우선 탐색 시작
        while (queue.length) {
            const current = queue.shift();
            for (let next of graph[current]) {
                // 예외 처리
                if (visited[next] !== 0) continue;
                // 방문 처리
                visited[next] = visited[current] + 1;
                queue.push(next);
            }
        }
        for (let num of visited) {
            // depth가 2~3 탐색
            if (num === 2 || num === 3) count += 1;
        }
        // 정답 정제
        answer = Math.max(answer, count);
    }
    return answer;
}

console.log(solution(input));