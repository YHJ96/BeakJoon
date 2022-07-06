const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    const [[n, m, start], ...position] = arr;
    // 그래프와 방문 순서 그리고 깊이를 담는 변수 초기화
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => 0);
    const depth = Array.from({ length: n + 1 }, () => -1);
    const order = Array.from({ length: n + 1 }, () => 0);
    // 간선의 요소만큼 순회시작
    for(let nodes of position) {
        const [node1, node2] = nodes;
        // 양방향 간선 그래프 등록
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 올림차순 정렬
    graph.forEach((item) => item.sort((a,b) => a-b));
    // 깊이 초기화
    depth[start] = 0;
    // 방문 초기화
    let ordered = 1;
    function dfs(current) {
        // 방문 처리
        visited[current] = true;
        order[current] = ordered++;
        // 노드의 요소만큼 순회시작
        for(let next of graph[current]) {
            // 예외처리
            if (visited[next]) continue;
            depth[next] = depth[current] + 1;
            // 탐색 시작
            dfs(next);
        }
    }
    dfs(start);
    // answer + 방문 * 깊이
    for(let i = 1; i <= n; i++) answer += (order[i] * depth[i]);
    return answer;
}

console.log(solution(inputArray));