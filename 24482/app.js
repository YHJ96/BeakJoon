const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    const [[n, m, start], ...position] = arr;
    // 그래프와 방문 그리고 깊이를 담는 변수 초기화
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1}, () => false);
    const depth = Array.from({ length: n + 1 }, () => -1);
    // 간선의 요소만큼 순회시작
    for(let nodes of position) {
        const [node1, node2] = nodes;
        // 양방향 간선 그래프 등록
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 올림차순 정렬
    graph.forEach((item) => item.sort((a,b) => b-a));
    // 깊이 초기화
    depth[start] = 0;
    // 깊이 우선 탐색 함수 생성
    function dfs(current) {
        // 방문 처리
        visited[current] = true;
        // 노드의 요소만큼 순회시작
        for(let next of graph[current]) {
            // 예외처리
            if (visited[next]) continue;
            depth[next] = depth[current] + 1;
            // 탐색 시작
            dfs(next);
        }
    }
    // 깊이 우선 탐색 시작
    dfs(start);
    // 정답 정제
    return depth.slice(1).join('\n');
}

console.log(solution(inputArray));