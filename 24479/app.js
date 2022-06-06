const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let item of input) {
    const inputValue = item.split(' ').map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    const [[n, m, start], ...position] = arr;
    const answer = Array.from({ length: n }, () => 0);
    // 그래프 정보를 입력 받는 배열 초기화
    const graph = Array.from({ length: n + 1 }, () => []);
    // 그래프의 방문처리를 입력 받는 배열 초기화
    const visited = Array.from({ length: n + 1 }, () => false);
    // 깊이 우선 탐색을 진행하면서 깊이를 탐색하는 변수
    let depth = 1;
    // position의 요소만큼 반복
    for (let node of position) {
        // 구조분해할당으로 노드를 초기화 (양방향 간선 그래프)
        const [node1, node2] = node;
        // 그래프 간선 정보 입력
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 그래프안의 방문 정보를 오름차순으로 정렬
    graph.forEach((node) => node.sort((a, b) => a - b));
    // 깊이 우선 탐색 함수 정의
    function DFS(current) {
        // 현재 노드 방문 처리
        visited[current] = true;
        // 노드는 1번 노드부터 시작함으로 -1 하고 현재 깊이를 기록
        answer[current - 1] = depth;
        // 그래프안의 방문 요소만큼 순회
        for (let next of graph[current]) {
            // 이미 방문을 하였으면 continue
            if (visited[next]) continue;
            // 깊이 += 1
            depth++;
            // 방문 실행
            DFS(next);
        }
    }
    // 깊이 우선 탐색 시작
    DFS(start);
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));