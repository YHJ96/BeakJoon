const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for (let item of input) {
    const inputValue = item.split(" ").map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    // 구조분해 할당을 이용해서 변수 초기화
    const [[n], [target1, target2], [m], ...position] = arr;
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);
    for (let nodes of position) {
        // 그래프에 간선의 정보를 입력 (양방향 간선)
        const [node1, node2] = nodes;
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 깊이 우선 탐색 시작
    function dfs(node, detph) {
        // 타켓 노드를 만나면 answer에 촌수 입력
        if(node === target2) answer = detph;
        // 노드 방문 시작
        for (let current of graph[node]) {
            // 방문한 노드 예외처리
            if (visited[current]) continue;
            // 백트래킹을 하면서 모든 노드 방문
            visited[current] = true;
            dfs(current, detph + 1);
            visited[current] = false;
        }
    }
    dfs(target1, 0);
    // 예외처리
    if(answer === 0) return -1;
    return answer;
}

console.log(solution(inputArray));