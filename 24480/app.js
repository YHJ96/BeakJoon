const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];

for(let x of input) {
    const inputValue = x.split(' ').map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    const [info, ...position] = arr;
    const [n, m, start] = info;
    const answer = Array.from({ length: n }, () => 0);
    // 그래프를 입력 받는 변수 초기화
    const graph = Array.from({ length: n + 1 }, () => []);
    // 방문 처리 여부를 받는 변수 초기화
    const visited = Array.from({ length: n + 1 }, () => false);
    let detph = 1;
    // position의 요소만큼 노드 입력
    for(let node of position) {
        // 양방향 간선 노드 입력
        const [node1, node2] = node;
        // 그래프에 간선 입력
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 노드의 요소 간선 정보를 내림차순 정리
    graph.forEach((node) => node.sort((a,b) => b-a));
    // 깊이 우선 탐색 함수 생성
    function DFS(current) {
        // 현재 노드 방문 처리
        visited[current] = true;
        // 현재 깊이를 answer에 입력
        answer[current - 1] = detph;
        // 그래프의 간선 정보만큼 순회
        for(let next of graph[current]) {
            // 방문한 노드라면 예외처리
            if(visited[next]) continue;
            // 깊이를 += 1
            detph++;
            // 다음 노드 방문 처리 실행
            DFS(next); 
        }
    }
    // 깊이 우선 탐색 시작
    DFS(start);
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));