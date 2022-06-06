const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for (let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(" ").map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = new Set();

    const [[n], [m], ...position] = arr;
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);
    // position의 요소만큼 순회시작
    for (let nodes of position) {
        // graph에 간선 정보 넣기 (양방향 간선 그래프)
        const [node1, node2] = nodes;
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 깊이 우선 탐색 함수 생성
    function dfs(node, depth) {
        for (let current of graph[node]) {
            // 친구의 친구까지만 해당되므로 2depth이상은 탈출 방문 체크후 탈춣
            if (visited[current] || depth >= 2) continue;
            // 해당 요소 넣기
            answer.add(current);
            // 방문 처리
            visited[node] = true;
            // depth + 1
            dfs(current, depth + 1);
        }
    }
    // 깊이 우선 탐색 실행
    dfs(1, 0);
    // 정답 정제
    return answer.size;
}

console.log(solution(inputArray));