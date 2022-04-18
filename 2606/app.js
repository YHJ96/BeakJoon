const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].trim();
    if(i >= 2) inputArray.push(inputValue.split(" ").map(Number));
    else inputArray.push(Number(inputValue));
}

function solution(arr) {
    const answer = [];
    // 구조분해할당을 사용해서 arr의 요소들을 분리한다.
    const [n, m, ...node] = arr;
    // 그래프를 사용하기위해 배열 초기화
    const graph = Array.from({ length : n + 1 }, () => []);
    // 방문체크를 위해서 배열 초기화
    const visited = Array.from({ length: n + 1 }, () => false);
    // node에 들어있는 요소들을 전부 순회한다.
    for(let item of node) {
        // 좌표를 node1, node2로 구조분해할당
        const [node1, node2] = item;
        // node1과 node2의 각각의 간선을 연결한다.
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 깊이우선탐색 실행
    function DFS(L) {
        // 방문한 노드를 ture로 바꾼다.
        visited[L] = true;
        // 감염된 노드의 번호를 push
        answer.push(L);
        // 모든 노드에 대해서 탐색시작
        for(let node of graph[L]) {
            // 방문을 하지 않은 노드가 있으면 방문실행
            if(!visited[node]) DFS(node);
        }
    }
    DFS(1);
    // 정답 정제 (감염시긴 자기자신을 빼줘야 함)
    return answer.length - 1;
}

console.log(solution(inputArray));