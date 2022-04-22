const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}
inputArray.unshift(+input[0]);

function solution(arr) {
    // 구조 분해 할당으로 노드의 개수와 연결된 좌표를 초기화
    const [n, ...nodes] = arr;
    const answer = [];
    // 트리 구조 초기화
    const graph = Array.from({ length : n + 1 }, () => []);
    // 방문 처리 초기화
    const visited = Array.from({ length : n + 1 }, () => false);
    // 노드의 좌표를 이용해서 노드간 간선 연결
    for(let node of nodes) {
        const [node1, node2] = node;
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 너비 우선 탐색 함수 생성
    function BFS(L) {
        // 해당 노드 방문처리
        visited[L] = true;
        const queue = [];
        // 처음 시작 노드 push
        queue.push(L);
        // 큐가 비어질 때 까지 실행
        while(queue.length) {
            // 현재 노드
            const cur = queue.shift();
            // 현재 간선으로 연결된 노드 탐색
            for(let i = 0 ; i < graph[cur].length; i++) {
                // 다음 간선 탐색
                const next = graph[cur][i];
                // 탐색 하지 않은 노드 실행
                if(!visited[next]) {
                    // 해당 방문처리
                    visited[next] = true;
                    // 해당 노드에 연결된 노드 push
                    answer[next] = cur;
                    // 다음 노드 실행
                    queue.push(next);
                }
            }
        }
    }
    BFS(1);
    // 정답 정제
    return answer.join("\n").trim();
}

console.log(solution(inputArray));