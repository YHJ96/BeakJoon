const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const [node1, node2] = input[i].split(' ').map(Number);
    inputArray.push([node1, node2]);
}

function solution(arr) {
    let answer = 0;
    // 구조분해할당으로 정점의 개수와 정점의 간선의 정보를 받음
    const [[n, m], ...node] = arr;
    // 그래프 생성
    const graph = Array.from({ length : n + 1 }, () => []);
    // 방문 처리 확인
    const visited = Array.from({ length: n + 1 }, () => false);
    // 해당 요소만큼 순회
    for(let item of node) {
        const [ node1, node2 ] = item;
        // 무방향 그래프이므로 서로 간선을 등록
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 깊이 우선 탐색 실행
    function DFS(L) {
        // 방문처리가 완료 되었으면 return
        if(visited[L]) return;   
        // 방문처리
        visited[L] = true;
        // 해당 노드에서 갈수 있는 노드의 요소만큼 방문처리 진행
        for(let node of graph[L]) {
            if(!visited[node]) DFS(node);
        }
    }
    // 그래프의 시작이 정점 1부터 시작이므로 1부터 length 까지
    for(let i = 1; i < graph.length; i++) {
        // 방문처리가 안된 노드확인
        if(!visited[i]) {
            // 탐색 시작
            DFS(i);
            // 탐색이 완료되면 answer += 1
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(inputArray));