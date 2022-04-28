const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function solution(arr) {
    let answer = [];
    // 구조분해할당으로 n과 해당 노드의 간선의 정보가 담겨 있는 position 변수를 초기화한다.
    const [n, ...position] = arr;
    const graph = Array.from({ length : n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => 0);
    // 그래프에 간선 정보를 입력한다 (단일 간선)
    for(let i = 1; i <= n; i++) graph[i].push(position[i - 1]);
    // 깊이 우선 탐색 시작
    function DFS(L, targetNode) {
        // 방문처리를 한 경우
        if(visited[L]) {
            // 현재 노드의 간선이 타켓노드와 연결되어 있으면 answer에 push
            if(L === targetNode) answer.push(targetNode);
        } else {
            // 방문 처리
            visited[L] = 1;
            // 노드 탐색 시작
            DFS(arr[L], targetNode);
        }
    }
    // 노드의 요소만큼 반복문 실행
    for(let i = 1; i <= n; i++) {
        // 방문 처리 초기화
        visited.fill(0);
        // 깊이 우선 탐색 실행
        DFS(i, i);
    }
    // 정답 정제
    answer.unshift(answer.length);
    return answer.join("\n");
}

console.log(solution(input));